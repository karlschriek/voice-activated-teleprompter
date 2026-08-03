// Records the prompter's tracked reading position with wall-clock timestamps.
//
// This is the sync *backup* for re-timing the video cut to the narration — the
// primary mechanism is speech-to-text alignment on the recorded audio. The log
// matters when the prompter itself is what's on the recorded screen: it says which
// word the tracker was on at which wall-clock moment, which can be matched against
// the recording's start time.
//
// One log per session (start → stop). The session-start event carries the full
// script text, so token indices in position events are self-describing. The log is
// mirrored to localStorage during the session (crash safety) and auto-downloaded as
// JSON on stop — but only if the session actually tracked something, so test
// starts don't litter Downloads.

export type PositionLogEvent =
  | { t: number; type: "session-start"; text: string }
  | { t: number; type: "session-stop" }
  | { t: number; type: "content"; text: string }
  | {
      t: number
      type: "position"
      kind: "final" | "interim"
      index: number
      word: string
    }

const STORAGE_KEY = "teleprompter-position-log"
const MIN_POSITIONS_TO_DOWNLOAD = 10

let events: PositionLogEvent[] = []
let positionCount = 0

const persist = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  } catch {
    // Quota exceeded — the in-memory log still downloads on stop.
  }
}

export const logSessionStart = (text: string) => {
  events = [{ t: Date.now(), type: "session-start", text }]
  positionCount = 0
  persist()
}

/** The loaded script changed mid-session (beat advance/skip). */
export const logContent = (text: string) => {
  events.push({ t: Date.now(), type: "content", text })
  persist()
}

export const logPosition = (
  kind: "final" | "interim",
  index: number,
  word: string,
) => {
  events.push({ t: Date.now(), type: "position", kind, index, word })
  positionCount += 1
  if (events.length % 25 === 0) persist()
}

export const logSessionStop = () => {
  events.push({ t: Date.now(), type: "session-stop" })
  persist()
  if (positionCount < MIN_POSITIONS_TO_DOWNLOAD) return

  const blob = new Blob([JSON.stringify(events, null, 1)], {
    type: "application/json",
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `prompter-log-${new Date().toISOString().replace(/[:.]/g, "-")}.json`
  a.click()
  URL.revokeObjectURL(url)
}
