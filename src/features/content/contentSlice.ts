import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { type TextElement, tokenize } from "../../lib/word-tokenizer"
import { toggleEdit } from "../navbar/navbarSlice"

export interface ContentSliceState {
  rawText: string
  textElements: TextElement[]
  finalTranscriptIndex: number
  interimTranscriptIndex: number
}

const initialText = `[LOOK AT LENS]

This is Snap CD, an open-source deployment orchestrator that manages the dependencies between your Terraform and OpenTofu state files.

[pause — let the name land]

If you've run Terraform at any real scale, you know this pattern. You start with one state file. It works great. Then it grows. And grows.

[now go off script and say anything — the scroll should keep following you]

The tooling that made this easy at the start is what makes it hard now.

[end of test — press Escape to stop, or the Edit button to paste your own script]`

const initialState: ContentSliceState = {
  rawText: initialText,
  textElements: tokenize(initialText),
  finalTranscriptIndex: -1,
  interimTranscriptIndex: -1,
}

export const contentSlice = createAppSlice({
  name: "content",

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    setContent: create.reducer((state, action: PayloadAction<string>) => {
      state.rawText = action.payload
      // Re-tokenize here so setting content takes effect immediately (e.g. loading a
      // beat from the dropdown), not only when leaving edit mode.
      state.textElements = tokenize(action.payload)
      state.finalTranscriptIndex = -1
      state.interimTranscriptIndex = -1
    }),

    setFinalTranscriptIndex: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.finalTranscriptIndex = action.payload
      },
    ),

    setInterimTranscriptIndex: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.interimTranscriptIndex = action.payload
      },
    ),

    resetTranscriptionIndices: create.reducer(state => {
      state.finalTranscriptIndex = -1
      state.interimTranscriptIndex = -1
    }),
  }),

  extraReducers: builder =>
    builder.addCase(toggleEdit, state => {
      state.textElements = tokenize(state.rawText)
    }),

  selectors: {
    selectRawText: state => state.rawText,
    selectTextElements: state => state.textElements,
    selectFinalTranscriptIndex: state => state.finalTranscriptIndex,
    selectInterimTranscriptIndex: state => state.interimTranscriptIndex,
  },
})

export const {
  setContent,
  setFinalTranscriptIndex,
  setInterimTranscriptIndex,
  resetTranscriptionIndices,
} = contentSlice.actions

export const {
  selectRawText,
  selectTextElements,
  selectFinalTranscriptIndex,
  selectInterimTranscriptIndex,
} = contentSlice.selectors
