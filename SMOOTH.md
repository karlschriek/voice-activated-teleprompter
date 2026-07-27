# SMOOTH.md — scroll speed: review, theory, and target design

How the teleprompter should scroll, why every attempt so far jittered, and the
design to build next. Written against the current working tree (= commit
`8e7f547`-era scroll code; the later experiments were discarded).

---

## Part 1 — Review: how scroll speed is managed today

### 1.1 The signal chain

```
microphone
  → SpeechRecognition (Chrome, continuous, interimResults)      [speech-recognizer.ts]
  → onresult: final_transcript / interim_transcript strings      [thunks.ts]
  → Levenshtein matcher: transcript × reference tokens           [speech-matcher.ts]
  → interimTranscriptIndex / finalTranscriptIndex (Redux)        [contentSlice.ts]
  → target px (React effect)                                     [Content.tsx]
  → rAF velocity loop → el.scrollTop                             [Content.tsx]
```

Facts about the signal that any design must respect:

- **Recognition arrives in bursts.** Every ~0.5–2 s the recognizer emits a result
  covering several words at once. Between bursts, nothing arrives. The index
  therefore advances in steps of ~2–10 elements, then holds.
- **The indices are element indices, not word indices.** `textElements` contains
  alternating TOKEN and DELIMITER elements; `token.index` counts both. A delta of
  8 in the index is ≈ 4 words. Any words/sec computed from raw index deltas is
  ~2× the true word rate. (A previous pace estimator made exactly this mistake.)
- **Interim indices are noisy and can regress.** Interim recognition revises
  itself; the matcher searches only forward from the last *final* index, which
  bounds but does not eliminate non-monotonicity.
- **Manual jumps exist.** Arrow keys move the indices by ±5/±15 elements; clicking
  a word sets them directly. These are teleports, not reading.

### 1.2 The target computation (per index change, React effect)

```
target = anchor.offsetTop + fraction × lineHeight − scrollOffset   (floored at 0)
```

- `anchor` = the element **2 past** the interim index (a lookahead hack so the
  reading line leads slightly).
- `fraction` = the anchor's horizontal position across the text column, mapped to
  a fraction of one line-height. This makes the target advance *within* a line
  instead of only at line ends — a genuine improvement that must be kept (in
  refined form).
- `scrollOffset` = the "Line position" slider, a raw pixel offset.

**Properties:** `target` is a *sample-and-hold staircase*: it jumps at each
recognition burst and is exactly constant in between. It is not a continuous
estimate of where the reader is; it is the last observation, held.

### 1.3 The velocity loop (rAF, every frame)

```
instantSpeed = (target − prevTarget) / dt         // derivative of the staircase
speed       += (max(0,instantSpeed) − speed) × min(1, SPEED_DECAY·dt)
alignSpeed   = deadzone(target − pos, 40px) × ALIGN
vel          = max(0, speed + alignSpeed)
pos         += vel·dt                              // float accumulator
if (pos > target && speed < 1) pos = target        // overshoot clamp
el.scrollTop = pos
```

Plus: a pending `[bracket]` hint clamps `target` to its own offsetTop (pins the
hint at the top edge), and a >4 px mismatch between `el.scrollTop` and `pos`
resyncs (manual scroll detection).

### 1.4 Why this jitters — failure analysis

1. **The speed estimate differentiates a staircase.** `(target − prevTarget)/dt`
   is a huge spike on burst frames and exactly zero on all other frames. The
   low-pass filter turns that into a sawtooth: the "speed" climbs at each burst
   and decays between them. The scroll's base speed therefore *pulses at burst
   frequency* — the observed speed-up/slow-down breathing.
2. **The align term chases the staircase.** `gap = target − pos` inflates
   instantly at each burst (by the whole burst's pixel length) and then shrinks
   as the scroll catches up. Feedback proportional to a stepping signal inherits
   the steps: surge on burst, settle after. The 40 px deadzone only hides the
   smallest steps.
3. **The overshoot clamp is a cliff.** Any time the glide passes the (stale,
   held) target, position freezes exactly at it — a dead stop that lasts until
   the next burst. Stop-start at burst frequency.
4. **`scrollOffset` interacts with the `max(0)` floor.** With a large slider
   value and/or large font, `target` pins at 0 for the first `scrollOffset`
   pixels of reading; combined with (3) the page cannot move at all. ("Line
   position maxed = almost zero scrolling.")
5. **Element-index pace ≈ 2× word pace** wherever indices were treated as words
   (affects any tuning done in "words/sec").
6. **HMR does not replace the rAF loop.** The `useEffect([], …)` closure keeps
   running with stale constants after hot reload; two debugging rounds were spent
   chasing behaviour that wasn't the current code. Testing protocol must be:
   **full Vite restart + hard reload, every time.**

Things the current code gets **right** and that must survive:

- Float scroll accumulator; `el.scrollTop` rounds to integers, so sub-pixel
  motion must accumulate outside the DOM.
- Intra-line horizontal fraction (kills the line-quantised staircase at source).
- Manual-scroll resync.
- Frame-time clamp (`dt ≤ 0.1 s`) so tab switches don't produce a lurch.

---

## Part 2 — Theory: what guarantees smoothness

### 2.1 Smoothness, defined

Perceived smoothness of a scrolling page is a property of the *derivatives* of
scroll position `s(t)`:

- **C0 — position continuity.** `s(t)` never jumps. Mechanical guarantee: the
  loop may only do `s += v·dt`; it may never assign `s` (the two exceptions —
  user-initiated jumps and the final safety clamp — are teleports the user
  caused or a bound the controller should already have prevented).
- **C1 — velocity continuity.** `v(t)` never steps. A step in speed is visible
  as a jerk even when position is continuous. Mechanical guarantee: the applied
  velocity moves toward its commanded value through a **rate limiter**
  (`|dv| ≤ a_max·dt`), so no computation anywhere can instantaneously change the
  scroll speed.
- **Bounded acceleration, tuned to perception.** Speed changes should play out
  over ~0.5–1.5 s. With reading speeds of ~150–350 px/s, `a_max` in the region
  of 250–400 px/s² makes any correction a visible *ease*, never a kick.
- **Monotonicity.** The page never scrolls backwards during reading (`v ≥ 0`).
  Going back is only ever a user action.

Corollary: **it is fine for the scroll to be *wrong* for a second.** Error is
corrected by adjusting speed over time. Every past failure came from trying to
be *right* immediately (chasing the latest observation) — correctness of
position was prioritised over continuity of velocity. The priority must be the
reverse: velocity continuity is inviolable; position error is absorbed slowly.

### 2.2 What "word position in the page" exactly is

Three distinct coordinate systems, which previous attempts conflated:

1. **Reading coordinate `w`** — *how far through the text the reader is*, in
   units of readable tokens. This is fractional and continuous: `w = 41.6` means
   "past token 41, sixty percent of the way to token 42". Tokens are the TOKEN
   elements only — delimiters and `[bracket]` hints are not readable and do not
   exist on this axis. The recognizer *observes* this axis at burst times
   (integer samples, from the matcher); between observations `w` is estimated.

2. **Content coordinate `p` (px)** — a position in the laid-out document. The
   mapping from reading to content coordinates is the **layout map `L`**:
   for each readable token `j`, measure its pixel position
   `p_j = offsetTop_j + f_j · lineHeight_j`, where `f_j` is the token's
   horizontal centre as a fraction of its line's *text* width. `L(w)` is the
   piecewise-linear interpolation through the `p_j`. Properties:
   - `L` is monotone and continuous; `L(41.6)` is a real pixel position between
     token 41 and 42.
   - **Paragraph gaps and `[hints]` are handled for free**: between the last
     token of a paragraph and the first of the next, `L` spans the blank
     vertical space, so its local slope `L'` is larger — reading at constant
     token rate produces automatically faster pixel motion across gaps. The
     previous "coast boost" special case disappears.
   - `L` is recomputed only when layout changes (content, font, margin,
     resize), never per frame.

3. **Screen coordinate `d` (lines)** — where the reader's position currently
   sits on screen, measured in **fractional lines from the viewport centre**:
   `d = (L(ŵ) − s) / lineH − c`, where `c` centres the scale. `d = 0`: reader
   exactly at centre. `d = +1.3`: one-and-a-third lines below centre (scroll is
   behind). `d = −2.0`: two lines above centre (scroll has run ahead). This is
   the user-visible control variable, and it is inherently fractional — "the
   word is on line 5" is only ever shorthand for `d ∈ [0.5, 1.5)`.

### 2.3 The central design move: estimate, then follow

All previous versions tried to *smooth the scroll against a jumpy target*. The
filter dynamics themselves then showed up on screen (pulse, surge, stall).

The correct decomposition is:

> **Maintain a continuous estimate of the reader — position `ŵ` and rate `v̂` in
> reading coordinates — and let the scroll follow the *estimate*, which is
> smooth by construction.**

This is a classic tracking problem (an α-β filter / dead-reckoning with
correction):

- **Predict (every frame):** `ŵ += v̂ · dt`. The estimate advances continuously
  at the estimated reading rate — this is what the eye follows between bursts,
  and it never stalls or steps.
- **Correct (per observation):** when a burst yields observed index `z`
  (converted to token count), compute innovation `e = z − ŵ` and blend:
  `ŵ += α·e`, `v̂ += β·e/Δt_obs`. Small `α` means an observation nudges the
  estimated position by a fraction of the error — never snaps it.
- **Lead cap:** `ŵ ≤ z_last + Λ` (a few tokens). Dead reckoning must not run
  arbitrarily far past what has actually been heard — this bounds how far the
  scroll can ever lead reality, replacing all previous pixel "lead allowance"
  hacks with a principled words-based bound. When you ad-lib (recognizer matches
  nothing), the estimate glides to the cap and waits.
- **Silence decay:** no observation for > ~1.5 s → decay `v̂` toward 0 with a
  ~1 s half-life. Pausing eases the scroll to a stop; resuming eases it back.
- **Teleport detection:** observation far behind `ŵ` (arrow keys / click) or
  wildly ahead → reset `ŵ = z` and re-seed `v̂`; this is a user action, not an
  error to smooth.

The scroll controller then never sees a staircase at all. Its input `L(ŵ)`
moves like a reader: continuously, at a human rate, easing through pauses.

### 2.4 Screen-position policy (the zones, made continuous and generic)

The 7-line spec, restated on the fractional axis `d` (positive = reader below
centre = scroll lagging):

| Region (7-line case)            | `d` range        | Behaviour                    |
| ------------------------------- | ---------------- | ---------------------------- |
| lines 3–5 (ideal band)          | −1.0 … +1.0      | follow at reading speed      |
| into line 5→6 (lagging)         | +1.0 … +2.5      | speed up on a gradient       |
| into line 3→2 (leading)         | −1.0 … −2.5      | slow down on a gradient      |
| end of line 6 (hard floor)      | d → +2.5         | max catch-up; never line 7   |
| start of line 2 (hard ceiling)  | d → −2.5         | v → 0; never line 1          |

Implemented not as cases but as **one continuous shaping curve** `m(d)` — a
speed multiplier over the feedforward — piecewise-linear (or smoothstepped)
through:

```
m(−2.5) = 0        m(−1.0) = 1        m(+1.0) = 1        m(+2.5) = m_max (≈2.5–3)
```

with linear ramps between the knots. Because `d` is fractional and `m` is
continuous, there are no zone "edges" to cross — the multiplier drifts as the
word drifts. And because the applied velocity is additionally rate-limited
(§2.1), even fast traversal of the curve cannot step the speed.

Beyond `d = +2.5` an additive emergency term guarantees the hard floor
(`v ≥ (d − 2.5)·lineH / T_emergency`); at `d = −2.5` the position clamp is the
final backstop (with `v = 0` set simultaneously so releasing the clamp doesn't
kick).

**Generalisation beyond 7 lines.** Compute `N = viewportHeight / lineH`
(fractional). The knots become:

```
ideal half-width   d0     = min(1, (N/2 − 1) / 2)
hard limit         d_hard = N/2 − 1          // exactly one full line kept clear
                                             // at each screen edge
```

For N = 7: `d0 = 1.25 → capped 1`, `d_hard = 2.5` — reproducing the 7-line spec
exactly. For a 5-line screen: `d0 = 0.75`, `d_hard = 1.5`. For 11 lines:
`d0 = 1`, `d_hard = 4.5`. The policy is now a function of layout, not a magic
seven. The reading line sits at the viewport centre; the "Line position" slider
stays deleted (a later, optional refinement could re-introduce it as the centre
fraction `φ_c`, shifting `c` — the maths is unchanged).

### 2.5 The control law (assembled)

Per frame (all gains per-second, everything scaled by clamped `dt`):

```
ŵ += v̂·dt                       (capped at z_last + Λ)      // estimator predict
p̂  = L(ŵ)                                                    // reading → px
d  = (p̂ − s)/lineH − c                                       // screen coordinate

v_ff  = v̂ · L'(ŵ)                                            // feedforward px/s
v_cmd = v_ff · m(d)                                           // shaped
        + emergency(d)                                        // hard-floor term
v_cmd = clamp(v_cmd, 0, V_MAX)

v += clamp(v_cmd − v, −a_max·dt, +a_max·dt)                   // rate limiter (C1)
s += v·dt                                                     // integrate (C0)
if d would exceed −d_hard: s = p̂ − (c − d_hard)·lineH; v = 0  // safety backstop
el.scrollTop = s                                              // only DOM write
```

Note what is *absent*: no gap-proportional align term against a raw target, no
overshoot clamp against a held observation, no deadzone, no per-burst anything.
The burst structure of recognition is fully absorbed inside the estimator by
`α`/`β`; the controller only ever sees smooth inputs.

---

## Part 3 — Implementation plan

### 3.1 Structure

New module `src/lib/reading-tracker.ts` (pure, testable, no React):

- `buildLayoutMap(container, textElements)` → readable-token pixel positions
  (`p_j`), lineH, token-index ↔ element-index tables. Rebuilt on content /
  font / margin / resize.
- `class ReadingTracker` — the α-β estimator: `observe(elementIndex, t)`,
  `predict(dt)`, exposes `ŵ`, `v̂`, and teleport events.

`Content.tsx` keeps only: the rAF loop calling the tracker + control law above,
the float accumulator, manual-scroll resync, and rendering.

### 3.2 What gets deleted

- The `+2` element anchor lookahead (the estimator's lead cap replaces it).
- The `[bracket]` pin-at-top machinery (`pendingHintRef`): with the reading line
  at centre, an upcoming hint is on screen for the full lower half of the
  viewport and scrolls out gently at reading speed — the pinning solved a
  problem the old jumpy scroll created. Revisit only if practice disproves this.
- `SPEED_DECAY` / `ALIGN` / `ALIGN_DEADZONE` loop.
- The "Line position" slider, its state/action/selector/localStorage, and the
  bottom-spacer's dependence on it (spacer = `centre offset + viewport`).

### 3.3 Parameters (initial values, all in one place)

| Param        | Default | Meaning                                             |
| ------------ | ------- | --------------------------------------------------- |
| `α`          | 0.35    | position correction per observation                 |
| `β`          | 0.15    | rate correction per observation                     |
| `Λ`          | 5 tokens| max dead-reckoning lead past last observation       |
| `T_sil`      | 1.5 s   | silence before pace decay starts                    |
| `t½`         | 1.0 s   | pace decay half-life                                |
| `d0`, `d_hard`| from N | zone knots (§2.4), recomputed on layout change      |
| `m_max`      | 2.5     | catch-up multiplier at `d_hard`                     |
| `a_max`      | 300 px/s²| velocity rate limit — the smoothness knob          |
| `V_MAX`      | 900 px/s| absolute speed ceiling                              |
| `dt_max`     | 0.1 s   | frame-time clamp                                    |

### 3.4 Debug & test protocol

Console line ~2×/s (readable, copyable):

```
d=+0.42  v=213  vff=228  m=0.97  ŵ=141.6  v̂=3.1tok/s  innov=+1.2  N=7.0
```

`d` is the headline number: it should wander gently inside ±1 while reading.

Test cases (full Vite restart + hard reload before each session — HMR does not
replace the rAF loop):

1. **Steady read, 30 s** — `v` roughly constant (±20 %), `d` stays in ±1,
   no visible speed pulsing at burst cadence.
2. **Pause 5 s mid-beat** — scroll eases to a stop in ~2 s, resumes without a
   jump when reading restarts.
3. **Ad-lib 10 s** — scroll glides ≤ Λ tokens further, stops, resumes smoothly
   on return to script.
4. **Pace change** — read fast then slow: `v` tracks within a few seconds, no
   overshoot oscillation.
5. **Paragraph / `[hint]` crossing** — no stall, a brief natural acceleration
   across the gap.
6. **Hard limits** — deliberately out-read the scroll: word visibly never enters
   the last line; deliberately stop mid-catch-up: word never enters the first.

Acceptance: no frame where speed visibly steps; no stop-start during continuous
speech; limits never violated.

### 3.5 Order of work

1. `buildLayoutMap` + `ReadingTracker` (pure; unit-testable with synthetic
   bursts — this is where correctness lives).
2. Replace the Content.tsx effect + rAF loop with the §2.5 law.
3. Delete the items in §3.2; re-apply defaults font 110 / margin 480.
4. Tune with the debug line against the §3.4 cases, in order: `a_max` (feel),
   then `α/β` (tracking), then `m_max`/knots (limits).
5. Only after the 7-line feel is signed off: verify the generic-N formulas on a
   different font size.
