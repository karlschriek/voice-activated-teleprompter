import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface NavBarSliceState {
  status: "editing" | "started" | "stopped"
  horizontallyFlipped: boolean
  verticallyFlipped: boolean
  fontSize: number
  margin: number
  opacity: number
  language: string
}

export const SUPPORTED_LOCALES = {
  "nl-NL": "Dutch (Netherlands)",
  "en-US": "English (USA)",
  "fr-FR": "French (France)",
  "de-DE": "German (Germany)",
  "it-IT": "Italian (Italy)",
  "pt-BR": "Portuguese (Brazil)",
  "es-ES": "Spanish (Spain)",
}

// Detect browser language and default to pt-BR if Portuguese, otherwise en-US
const detectLanguage = (): string => {
  const savedLanguage = localStorage.getItem("teleprompter-language")
  if (savedLanguage) {
    return savedLanguage
  }

  if (SUPPORTED_LOCALES.hasOwnProperty(navigator.language)) {
    return navigator.language
  }

  // TODO: Try to find a "best match", for example if `navigator.language` is `fr-CA` or just `fr`...

  return "en-US"
}

// Persisted numeric settings. Each setting is remembered in localStorage so it
// survives a reload; on first run (nothing stored) it falls back to the default.
const loadNumber = (key: string, fallback: number): number => {
  const stored = localStorage.getItem(key)
  if (stored === null) return fallback
  const n = parseInt(stored, 10)
  return Number.isFinite(n) ? n : fallback
}

const loadBool = (key: string, fallback: boolean): boolean => {
  const stored = localStorage.getItem(key)
  return stored === null ? fallback : stored === "true"
}

// Defaults tuned for reading at camera distance (7 visible lines at 110/480).
// The active reading line is fixed at screen centre in Content.tsx.
const initialState: NavBarSliceState = {
  status: "stopped",
  horizontallyFlipped: loadBool("teleprompter-flip-h", false),
  verticallyFlipped: loadBool("teleprompter-flip-v", false),
  fontSize: loadNumber("teleprompter-font-size", 110),
  margin: loadNumber("teleprompter-margin", 480),
  opacity: loadNumber("teleprompter-opacity", 100),
  language: detectLanguage(),
}

export const navbarSlice = createAppSlice({
  name: "navbar",

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    toggleEdit: create.reducer(state => {
      if (state.status === "editing") {
        state.status = "stopped"
      } else {
        state.status = "editing"
      }
    }),

    start: create.reducer(state => {
      state.status = "started"
    }),

    stop: create.reducer(state => {
      state.status = "stopped"
    }),

    flipHorizontally: create.reducer(state => {
      state.horizontallyFlipped = !state.horizontallyFlipped
      localStorage.setItem("teleprompter-flip-h", String(state.horizontallyFlipped))
    }),

    flipVertically: create.reducer(state => {
      state.verticallyFlipped = !state.verticallyFlipped
      localStorage.setItem("teleprompter-flip-v", String(state.verticallyFlipped))
    }),

    setFontSize: create.reducer((state, action: PayloadAction<number>) => {
      state.fontSize = action.payload
      localStorage.setItem("teleprompter-font-size", String(action.payload))
    }),

    setMargin: create.reducer((state, action: PayloadAction<number>) => {
      state.margin = action.payload
      localStorage.setItem("teleprompter-margin", String(action.payload))
    }),

    setOpacity: create.reducer((state, action: PayloadAction<number>) => {
      state.opacity = action.payload
      localStorage.setItem("teleprompter-opacity", String(action.payload))
    }),

    setLanguage: create.reducer((state, action: PayloadAction<string>) => {
      state.language = action.payload
      localStorage.setItem("teleprompter-language", action.payload)
    }),
  }),

  selectors: {
    selectStatus: state => state.status,
    selectFontSize: state => state.fontSize,
    selectMargin: state => state.margin,
    selectHorizontallyFlipped: state => state.horizontallyFlipped,
    selectVerticallyFlipped: state => state.verticallyFlipped,
    selectOpacity: state => state.opacity,
    selectLanguage: state => state.language,
  },
})

// Action creators are generated for each case reducer function.
export const {
  toggleEdit,
  start,
  stop,
  flipHorizontally,
  flipVertically,
  setFontSize,
  setMargin,
  setOpacity,
  setLanguage,
} = navbarSlice.actions

export const {
  selectStatus,
  selectFontSize,
  selectMargin,
  selectHorizontallyFlipped,
  selectVerticallyFlipped,
  selectOpacity,
  selectLanguage,
} = navbarSlice.selectors
