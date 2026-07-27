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
  selectScrollOffset,
} from "../navbar/navbarSlice"

import {
  selectRawText,
  selectTextElements,
  selectFinalTranscriptIndex,
  selectInterimTranscriptIndex,
} from "./contentSlice"

import { startTeleprompter, stopTeleprompter } from "../../app/thunks"

export const Content = () => {
  const dispatch = useAppDispatch()

  const status = useAppSelector(selectStatus)
  const fontSize = useAppSelector(selectFontSize)
  const margin = useAppSelector(selectMargin)
  const opacity = useAppSelector(selectOpacity)
  const scrollOffset = useAppSelector(selectScrollOffset)
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
  const lastRef = useRef<null | HTMLDivElement>(null)
  const pendingHintRef = useRef<null | HTMLDivElement>(null)
  const bottomSpacerRef = useRef<null | HTMLDivElement>(null)

  // Index of the anchor and of the first not-yet-spoken [bracket] hint after it.
  // Used to keep a pending hint pinned at the top edge rather than scrolled away.
  const anchorIndex =
    interimTranscriptIndex > 0
      ? Math.min(interimTranscriptIndex + 2, textElements.length - 1)
      : -1
  const firstPendingHintIndex = textElements.findIndex(
    (el, i) => i > anchorIndex && el.value.startsWith("["),
  )

  // Continuous scrolling that never stalls between recognition bursts.
  //
  // The problem: recognition advances the target position in discrete jumps (a burst
  // of words at once). Anything that races the scroll TO the target then waits will
  // "stand still, then jump" — because between bursts the target is constant, so the
  // scroll arrives and stops until the next burst.
  //
  // The fix: drive the scroll by a *persistent estimated speed*. We measure how much
  // the target advances per second (px/sec) with a slow-decaying average, so the
  // estimate survives the quiet gaps between bursts and keeps the page gliding at a
  // steady pace. A gentle position term only trims that speed to stay aligned — it
  // never becomes the sole driver, so the scroll doesn't stall on-target.
  const targetScrollRef = useRef(0) // where recognition says you are (px)
  const prevTargetRef = useRef(0) // target last frame, to measure its advance
  const speedRef = useRef(0) // persistent estimated scroll speed (px/sec)
  const scrollPosRef = useRef(0) // float scroll position (DOM scrollTop rounds; we don't)
  const rafRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number | null>(null)

  // Tunables:
  const SPEED_DECAY = 0.22 // per second; how fast the speed estimate fades toward the
  //                          instantaneous target-advance. Lower = steadier glide that
  //                          coasts through gaps; higher = tracks pace changes faster.
  const ALIGN = 0.35 // per second; gentle pull that keeps the scroll aligned with the
  //                    true target. Lower = smoother/steadier (less surge-and-settle per
  //                    burst); higher = tighter tracking but more speed pulsing.
  const ALIGN_DEADZONE = 40 // px; ignore small gaps so ordinary burst-to-burst lag
  //                            doesn't constantly nudge the speed. Only correct real drift.

  useEffect(() => {
    const el = containerRef.current
    const anchor = lastRef.current
    if (!el || !anchor) {
      targetScrollRef.current = 0
      return
    }

    // Intra-line target. `offsetTop` alone is the same for every word on a visual
    // line, so the target only steps at line ENDS — reading across a line moves
    // nothing, then it jumps a whole line. That staircase is what reads as jitter,
    // and no amount of velocity smoothing hides it because the signal is line-
    // quantised. Fix: add how far ACROSS the line the anchor word sits (its
    // horizontal fraction) as a fraction of a line-height, so the target creeps
    // smoothly down as you read the line and simply continues at the wrap.
    const lineHeight = anchor.offsetHeight || fontSize
    // Usable horizontal span of a line: the content box minus its horizontal padding
    // (the `margin` setting is applied as left/right padding on the content). offsetLeft
    // is measured from the padding-box edge, so subtract the left padding to make the
    // fraction run 0→1 across the actual text column.
    const usableWidth = Math.max(1, el.clientWidth - 2 * margin)
    const fraction = Math.min(
      1,
      Math.max(0, (anchor.offsetLeft - margin) / usableWidth),
    )

    targetScrollRef.current = Math.max(
      anchor.offsetTop + fraction * lineHeight - scrollOffset,
      0,
    )
  }, [interimTranscriptIndex, finalTranscriptIndex, scrollOffset, fontSize, margin])

  useEffect(() => {
    const step = (now: number) => {
      const el = containerRef.current
      const last = lastTimeRef.current
      lastTimeRef.current = now
      const dt = last === null ? 0 : Math.min((now - last) / 1000, 0.1)

      if (el && dt > 0) {
        let target = targetScrollRef.current

        // Keep a pending [bracket] hint from scrolling off the top edge (stays
        // visible; the readable text below it never gets hidden, so no deadlock).
        const hint = pendingHintRef.current
        if (hint) target = Math.min(target, hint.offsetTop)

        // Resync our float position if something external moved the scroll (arrow
        // keys, clicking a word) — a large mismatch means a manual jump happened.
        if (Math.abs(el.scrollTop - scrollPosRef.current) > 4) {
          scrollPosRef.current = el.scrollTop
        }

        // Persistent speed estimate: how fast the target is advancing (px/sec),
        // averaged with slow decay so it coasts smoothly through the silent gaps
        // between bursts instead of dropping to zero.
        const instantSpeed = (target - prevTargetRef.current) / dt
        prevTargetRef.current = target
        const decay = Math.min(1, SPEED_DECAY * dt)
        speedRef.current += (Math.max(0, instantSpeed) - speedRef.current) * decay

        // Gentle alignment: a slow pull toward the true target, added to the glide
        // speed rather than replacing it — so we stay in sync without racing+stalling.
        // A deadzone ignores the small, ever-present burst-to-burst lag so the speed
        // isn't constantly nudged up and down (that pulsing is what reads as
        // speeding-up-and-slowing-down); only genuine drift past the deadzone corrects.
        const gap = target - scrollPosRef.current
        const alignGap =
          gap > ALIGN_DEADZONE
            ? gap - ALIGN_DEADZONE
            : gap < -ALIGN_DEADZONE
              ? gap + ALIGN_DEADZONE
              : 0
        const alignSpeed = alignGap * ALIGN

        const vel = Math.max(0, speedRef.current + alignSpeed)
        scrollPosRef.current += vel * dt

        // Don't overshoot past the target on the alignment pull.
        if (scrollPosRef.current > target && speedRef.current < 1) {
          scrollPosRef.current = target
        }

        el.scrollTop = scrollPosRef.current
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

    const containerHeight = containerRef.current.clientHeight
    bottomSpacerRef.current.style.height = `${scrollOffset + containerHeight}px`
  }, [scrollOffset, textElements.length])

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
          {textElements.map((textElement, index, array) => {
            // Scroll anchor: look ~2 elements ahead of the last spoken word so the
            // reading line leads slightly.
            const anchor =
              interimTranscriptIndex > 0
                ? Math.min(interimTranscriptIndex + 2, array.length - 1)
                : -1

            // The first not-yet-spoken [bracket] hint. We tag it so the scroll can
            // keep it from being pushed above the top edge (see the rAF loop): the
            // page still advances as you read, but a pending hint stops rising at the
            // top instead of vanishing — so it stays readable without deadlocking.
            const isPendingHint =
              index > anchor && textElement.value.startsWith("[")
            const itemProps =
              index === anchor
                ? { ref: lastRef }
                : isPendingHint && index === firstPendingHintIndex
                  ? { ref: pendingHintRef }
                  : {}
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
                {...itemProps}
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
