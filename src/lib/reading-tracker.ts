import type { TextElement } from "./word-tokenizer"

// Layout map and reading-position estimator. See SMOOTH.md for the design:
// recognition observes integer token positions in bursts; the tracker maintains a
// continuous estimate (position + rate) that the scroll follows.

export interface LayoutMap {
  /** Vertical advance of one text line, px. */
  lineH: number
  /** Continuous content position (px) per readable token, ascending. */
  tokenPx: number[]
  /** Element index → ordinal of the nearest readable token at/before it (-1 if none). */
  elementToOrdinal: number[]
}

/**
 * Measure the rendered token spans and build the reading→pixel map L.
 * `container.children[i]` must correspond to `textElements[i]`.
 */
export const buildLayoutMap = (
  container: HTMLElement,
  textElements: TextElement[],
): LayoutMap | null => {
  const children = container.children
  const boxes: { top: number; left: number; width: number; height: number }[] = []
  const elementToOrdinal: number[] = new Array(textElements.length).fill(-1)

  // Content-relative, scroll-invariant coordinates via rects (offsetTop is
  // relative to the nearest positioned ancestor, which is not the container).
  const cRect = container.getBoundingClientRect()
  const baseTop = cRect.top - container.scrollTop
  let ordinal = -1
  for (let i = 0; i < textElements.length; i++) {
    const el = children[i] as HTMLElement | undefined
    if (textElements[i].type === "TOKEN" && el) {
      ordinal++
      const r = el.getBoundingClientRect()
      boxes.push({
        top: r.top - baseTop,
        left: r.left - cRect.left,
        width: r.width,
        height: r.height,
      })
    }
    elementToOrdinal[i] = ordinal
  }
  if (boxes.length === 0) return null

  // Line advance = smallest positive step between consecutive distinct line tops
  // (a paragraph gap is a larger step and must not be mistaken for it).
  let lineH = boxes[0].height || 1
  let best = Infinity
  for (let i = 1; i < boxes.length; i++) {
    const d = boxes[i].top - boxes[i - 1].top
    if (d > 1 && d < best) best = d
  }
  if (best !== Infinity) lineH = best

  // p_j = line top + horizontal fraction across that line's text span, in lineH units.
  const tokenPx: number[] = new Array(boxes.length)
  let lineStart = 0
  for (let i = 1; i <= boxes.length; i++) {
    if (i === boxes.length || Math.abs(boxes[i].top - boxes[lineStart].top) > 1) {
      let lo = Infinity
      let hi = -Infinity
      for (let j = lineStart; j < i; j++) {
        lo = Math.min(lo, boxes[j].left)
        hi = Math.max(hi, boxes[j].left + boxes[j].width)
      }
      const span = Math.max(1, hi - lo)
      for (let j = lineStart; j < i; j++) {
        const f = (boxes[j].left + boxes[j].width / 2 - lo) / span
        tokenPx[j] = boxes[j].top + f * lineH
      }
      lineStart = i
    }
  }
  for (let i = 1; i < tokenPx.length; i++) {
    if (tokenPx[i] < tokenPx[i - 1]) tokenPx[i] = tokenPx[i - 1]
  }

  return { lineH, tokenPx, elementToOrdinal }
}

/** L(w): content position (px) at fractional token position w. */
export const pxAt = (map: LayoutMap, w: number): number => {
  const n = map.tokenPx.length
  if (n === 0) return 0
  if (w <= 0) return map.tokenPx[0]
  if (w >= n - 1) return map.tokenPx[n - 1]
  const i = Math.floor(w)
  return map.tokenPx[i] + (w - i) * (map.tokenPx[i + 1] - map.tokenPx[i])
}

/** L'(w): px per token on the current segment, bounded to sane values. */
export const slopeAt = (map: LayoutMap, w: number): number => {
  const n = map.tokenPx.length
  if (n < 2) return map.lineH
  const i = Math.min(Math.max(Math.floor(w), 0), n - 2)
  const s = map.tokenPx[i + 1] - map.tokenPx[i]
  return Math.min(Math.max(s, 2), 4 * map.lineH)
}

const ALPHA = 0.35 // position correction per observation
const BETA = 0.15 // rate correction per observation
const LEAD = 5 // max tokens of dead-reckoning past the last observation
const T_SIL = 1.5 // s without new words before pace decay
const T_HALF = 1.0 // s; pace decay half-life
const V_TOK_MAX = 8 // tokens/s ceiling
const TELEPORT_BACK = 3 // tokens; larger backward step = user jump
const TELEPORT_FWD = 15 // tokens; larger forward step = jump, not reading

/**
 * α-β tracker over the reading coordinate (fractional tokens).
 * `observe()` on each recognition advance; `predict()` every frame.
 */
export class ReadingTracker {
  /** Estimated reading position, fractional tokens. */
  w = 0
  /** Estimated reading rate, tokens/s. */
  v = 0
  /** Last observation innovation (diagnostics). */
  lastInnovation = 0

  private lastObsOrdinal = 0
  private lastObsTime: number | null = null

  reset(): void {
    this.w = 0
    this.v = 0
    this.lastInnovation = 0
    this.lastObsOrdinal = 0
    this.lastObsTime = null
  }

  /** New observed token ordinal at time `now` (seconds). */
  observe(ordinal: number, now: number): void {
    if (this.lastObsTime === null) {
      this.w = ordinal
    } else if (ordinal !== this.lastObsOrdinal) {
      const e = ordinal - this.w
      this.lastInnovation = e
      if (e < -TELEPORT_BACK || e > TELEPORT_FWD) {
        this.w = ordinal
      } else {
        const dtObs = Math.min(Math.max(now - this.lastObsTime, 0.05), 3)
        this.w += ALPHA * e
        this.v = Math.min(Math.max(this.v + (BETA * e) / dtObs, 0), V_TOK_MAX)
      }
    } else {
      return
    }
    this.lastObsOrdinal = ordinal
    this.lastObsTime = now
  }

  /** Advance the estimate by dt seconds (called every frame). */
  predict(dt: number, now: number): void {
    if (this.lastObsTime === null) return
    if (now - this.lastObsTime > T_SIL) {
      this.v *= Math.pow(0.5, dt / T_HALF)
    }
    this.w = Math.min(this.w + this.v * dt, this.lastObsOrdinal + LEAD)
  }
}
