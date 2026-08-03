import type { AppThunk } from "./store"
import { start, stop } from "../features/navbar/navbarSlice"
import {
  setContent,
  setFinalTranscriptIndex,
  setInterimTranscriptIndex,
} from "../features/content/contentSlice"
import { setBeatIndex } from "../features/episode/episodeSlice"
import SpeechRecognizer from "../lib/speech-recognizer"
import { computeSpeechRecognitionTokenIndex } from "../lib/speech-matcher"
import {
  EPISODES,
  BEAT_MARKER_PREFIX,
  combineEpisode,
} from "../lib/script-parser"
import {
  logSessionStart,
  logSessionStop,
  logPosition,
  logContent,
} from "../lib/position-log"

let speechRecognizer: SpeechRecognizer | null = null

/** Load one beat of the current episode into the prompter. No-op past the end. */
export const loadBeat =
  (index: number): AppThunk =>
  (dispatch, getState) => {
    const { episodeId } = getState().episode
    const beat = EPISODES.find(ep => ep.id === episodeId)?.beats[index]
    if (!beat) return
    dispatch(setBeatIndex(index))
    dispatch(setContent(beat.text))
    logContent(beat.text)
  }

/** Load the whole episode (all beats, with [§ …] boundary markers) into the prompter. */
export const loadWholeEpisode =
  (episodeId?: string): AppThunk =>
  (dispatch, getState) => {
    const id = episodeId ?? getState().episode.episodeId
    const ep = EPISODES.find(e => e.id === id)
    if (!ep) return
    const combined = combineEpisode(ep)
    dispatch(setContent(combined))
    logContent(combined)
  }

/**
 * Skip to the next beat. By-beat mode: load the next beat (from nothing → the
 * first). Whole-episode mode: jump the reading position to the next [§ …] marker.
 */
export const skipBeat = (): AppThunk => (dispatch, getState) => {
  const { byBeat, beatIndex } = getState().episode
  if (byBeat) {
    dispatch(loadBeat(beatIndex + 1))
    return
  }
  const { textElements, finalTranscriptIndex } = getState().content
  const next = textElements.find(
    el =>
      el.index > finalTranscriptIndex &&
      el.type === "DELIMITER" &&
      el.value.includes(BEAT_MARKER_PREFIX),
  )
  if (!next) return
  dispatch(setFinalTranscriptIndex(next.index))
  dispatch(setInterimTranscriptIndex(next.index))
  logPosition("final", next.index, "[skip]")
}

export const startTeleprompter = (): AppThunk => (dispatch, getState) => {
  dispatch(start())

  logSessionStart(getState().content.rawText)

  const { language } = getState().navbar
  speechRecognizer = new SpeechRecognizer(language)

  speechRecognizer.onresult(
    (final_transcript: string, interim_transcript: string) => {
      const {
        textElements,
        finalTranscriptIndex: lastFinalTranscriptIndex,
        interimTranscriptIndex: lastInterimTranscriptIndex,
      } = getState().content

      if (final_transcript !== "") {
        const finalTranscriptIndex = computeSpeechRecognitionTokenIndex(
          final_transcript,
          textElements,
          lastFinalTranscriptIndex,
        )
        dispatch(setFinalTranscriptIndex(finalTranscriptIndex))
        if (finalTranscriptIndex !== lastFinalTranscriptIndex) {
          logPosition(
            "final",
            finalTranscriptIndex,
            textElements[finalTranscriptIndex]?.value ?? "",
          )
        }

        // By-beat mode: when the confirmed position reaches the beat's last
        // word, move on to the next beat automatically.
        const { byBeat, beatIndex } = getState().episode
        if (byBeat && beatIndex >= 0) {
          const lastToken = [...textElements]
            .reverse()
            .find(el => el.type === "TOKEN")
          if (lastToken && finalTranscriptIndex >= lastToken.index) {
            dispatch(loadBeat(beatIndex + 1))
          }
        }
      }

      if (interim_transcript !== "") {
        const interimTranscriptIndex = computeSpeechRecognitionTokenIndex(
          interim_transcript,
          textElements,
          lastFinalTranscriptIndex,
        )
        dispatch(setInterimTranscriptIndex(interimTranscriptIndex))
        if (interimTranscriptIndex !== lastInterimTranscriptIndex) {
          logPosition(
            "interim",
            interimTranscriptIndex,
            textElements[interimTranscriptIndex]?.value ?? "",
          )
        }
      }
    },
  )

  speechRecognizer.start()
}

export const stopTeleprompter = (): AppThunk => dispatch => {
  if (speechRecognizer !== null) {
    speechRecognizer.stop()
    speechRecognizer = null
  }

  logSessionStop()

  dispatch(stop())
}

export const changeLanguage = (language: string): AppThunk => dispatch => {
  if (speechRecognizer !== null) {
    speechRecognizer.setLanguage(language)
  }
}
