import { useEffect, useLayoutEffect, useRef } from "react"
import { escape } from "html-escaper"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setContent, setFinalTranscriptIndex, setInterimTranscriptIndex } from "./contentSlice"

import {
  selectStatus,
  selectHorizontallyFlipped,
  selectVerticallyFlipped,
  selectFontSize,
  selectMargin,
  selectOpacity,
} from "../navbar/navbarSlice"

import {
  selectRawText,
  selectTextElements,
  selectFinalTranscriptIndex,
  selectInterimTranscriptIndex,
} from "./contentSlice"

import { startTeleprompter, stopTeleprompter } from "../../app/thunks"
import {
  buildLayoutMap,
  pxAt,
  slopeAt,
  ReadingTracker,
  type LayoutMap,
} from "../../lib/reading-tracker"

// Scroll control constants — see SMOOTH.md §2.5 and §3.3.
const A_MAX = 300 // px/s²; velocity rate limit (the smoothness knob)
const V_MAX = 900 // px/s
const M_MAX = 2.5 // catch-up multiplier at the hard floor
const T_EMERG = 0.6 // s; horizon for the beyond-hard-floor emergency term
const DEBUG = true

export const Content = () => {
  const dispatch = useAppDispatch()

  const status = useAppSelector(selectStatus)
  const fontSize = useAppSelector(selectFontSize)
  const margin = useAppSelector(selectMargin)
  const opacity = useAppSelector(selectOpacity)
  const horizontallyFlipped = useAppSelector(selectHorizontallyFlipped)
  const verticallyFlipped = useAppSelector(selectVerticallyFlipped)
  const rawText = useAppSelector(selectRawText)
  const textElements = useAppSelector(selectTextElements)
  const finalTranscriptIndex = useAppSelector(selectFinalTranscriptIndex)
  const interimTranscriptIndex = useAppSelector(selectInterimTranscriptIndex)

  const style = {
    fontSize: `${fontSize}px`,
    padding: `0 ${margin}px`,
  }

  const containerRef = useRef<null | HTMLDivElement>(null)
  const bottomSpacerRef = useRef<null | HTMLDivElement>(null)

  const layoutRef = useRef<LayoutMap | null>(null)
  const trackerRef = useRef(new ReadingTracker())
  const scrollPosRef = useRef(0)
  const velRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)
  const debugCountRef = useRef(0)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el || status === "editing") {
      layoutRef.current = null
      return
    }
    layoutRef.current = buildLayoutMap(el, textElements)
  }, [textElements, fontSize, margin, status])

  useEffect(() => {
    const onResize = () => {
      const el = containerRef.current
      if (el && status !== "editing") {
        layoutRef.current = buildLayoutMap(el, textElements)
      }
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [textElements, status])

  useEffect(() => {
    if (interimTranscriptIndex < 0) {
      trackerRef.current.reset()
      return
    }
    const map = layoutRef.current
    if (!map || map.elementToOrdinal.length === 0) return
    const i = Math.min(
      Math.max(interimTranscriptIndex, 0),
      map.elementToOrdinal.length - 1,
    )
    const ord = map.elementToOrdinal[i]
    if (ord >= 0) trackerRef.current.observe(ord, performance.now() / 1000)
  }, [interimTranscriptIndex])

  useEffect(() => {
    const step = (nowMs: number) => {
      const el = containerRef.current
      const last = lastTimeRef.current
      lastTimeRef.current = nowMs
      const dt = last === null ? 0 : Math.min((nowMs - last) / 1000, 0.1)
      const map = layoutRef.current
      const tracker = trackerRef.current

      if (el && map && dt > 0) {
        if (Math.abs(el.scrollTop - scrollPosRef.current) > 4) {
          scrollPosRef.current = el.scrollTop
        }

        tracker.predict(dt, nowMs / 1000)

        const lineH = map.lineH
        const p = pxAt(map, tracker.w)
        const N = el.clientHeight / lineH
        const dHard = Math.max(0.5, N / 2 - 1)
        const d0 = Math.min(1, dHard / 2)
        const d = (p - scrollPosRef.current) / lineH - N / 2

        // Continuous speed-shaping curve m(d): 0 at the ceiling, 1 in the ideal
        // band, M_MAX at the floor.
        let m: number
        if (d <= -dHard) m = 0
        else if (d < -d0) m = (d + dHard) / (dHard - d0)
        else if (d <= d0) m = 1
        else if (d < dHard) m = 1 + ((M_MAX - 1) * (d - d0)) / (dHard - d0)
        else m = M_MAX

        const vff = tracker.v * slopeAt(map, tracker.w)
        let vcmd = vff * m
        if (d > dHard) vcmd += ((d - dHard) * lineH) / T_EMERG
        vcmd = Math.min(Math.max(vcmd, 0), V_MAX)

        velRef.current += Math.min(
          Math.max(vcmd - velRef.current, -A_MAX * dt),
          A_MAX * dt,
        )
        scrollPosRef.current += velRef.current * dt

        // Safety backstop: reader never above the second visible line. Only binds
        // on teleports (m(d) reaches 0 before this in normal operation).
        const maxS = Math.max(0, p - lineH)
        if (scrollPosRef.current > maxS) {
          scrollPosRef.current = maxS
          velRef.current = 0
        }
        if (scrollPosRef.current < 0) scrollPosRef.current = 0

        el.scrollTop = scrollPosRef.current

        if (DEBUG && ++debugCountRef.current % 30 === 0) {
          // eslint-disable-next-line no-console
          console.log(
            `d=${d.toFixed(2)} v=${velRef.current.toFixed(0)} vff=${vff.toFixed(0)} m=${m.toFixed(2)} w=${tracker.w.toFixed(1)} vtok=${tracker.v.toFixed(2)} innov=${tracker.lastInnovation.toFixed(1)} N=${N.toFixed(1)}`,
          )
        }
      }

      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useLayoutEffect(() => {
    if (!containerRef.current || !bottomSpacerRef.current) {
      return
    }
    bottomSpacerRef.current.style.height = `${containerRef.current.clientHeight}px`
  }, [textElements.length])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (status === "editing") return;

      const maxIndex = textElements.length - 1;

      if (event.code === "Escape") {
        event.preventDefault();
        dispatch(stopTeleprompter());
      } else if (event.code === "Space") {
        event.preventDefault();
        if (status === "stopped") {
          dispatch(startTeleprompter());
        } else if (status === "started") {
          dispatch(stopTeleprompter());
        }
      } else if (event.code === "ArrowUp") {
        event.preventDefault();
        dispatch(setFinalTranscriptIndex(Math.max(-1, finalTranscriptIndex - 15)));
        dispatch(setInterimTranscriptIndex(Math.max(-1, interimTranscriptIndex - 15)));
      } else if (event.code === "ArrowLeft") {
        event.preventDefault();
        dispatch(setFinalTranscriptIndex(Math.max(-1, finalTranscriptIndex - 5)));
        dispatch(setInterimTranscriptIndex(Math.max(-1, interimTranscriptIndex - 5)));
      } else if (event.code === "ArrowDown") {
        event.preventDefault();
        dispatch(setFinalTranscriptIndex(Math.min(maxIndex, finalTranscriptIndex + 15)));
        dispatch(setInterimTranscriptIndex(Math.min(maxIndex, interimTranscriptIndex + 15)));
      } else if (event.code === "ArrowRight") {
        event.preventDefault();
        dispatch(setFinalTranscriptIndex(Math.min(maxIndex, finalTranscriptIndex + 5)));
        dispatch(setInterimTranscriptIndex(Math.min(maxIndex, interimTranscriptIndex + 5)));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  })

  return (
    <main className="content-area">
      {status === "editing" ? (
        <textarea
          className="content"
          style={style}
          value={rawText}
          onChange={e => dispatch(setContent(e.target.value || ""))}
        />
      ) : (
        <div
          className="content"
          ref={containerRef}
          style={{
            ...style,
            opacity: opacity / 100,
            transform: `scale(${horizontallyFlipped ? "-1" : "1"}, ${verticallyFlipped ? "-1" : "1"})`,
          }}
        >
          {textElements.map(textElement => {
            const index = textElement.index
            return (
              <span
                key={textElement.index}
                onClick={() => {
                  dispatch(setFinalTranscriptIndex(index - 1))
                  dispatch(setInterimTranscriptIndex(index - 1))
                }}
                className={
                  finalTranscriptIndex > 0 &&
                  textElement.index <= finalTranscriptIndex + 1
                    ? "final-transcript"
                    : interimTranscriptIndex > 0 &&
                        textElement.index <= interimTranscriptIndex + 1
                      ? "interim-transcript"
                      : "has-text-white"
                }
                dangerouslySetInnerHTML={{
                  __html: escape(textElement.value).replace(/\n/g, "<br>"),
                }}
              />
            )
          })}
          <div
            aria-hidden="true"
            ref={bottomSpacerRef}
            style={{ height: 0, flexShrink: 0 }}
          />
        </div>
      )}
    </main>
  )
}
