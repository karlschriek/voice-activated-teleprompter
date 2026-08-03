import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { EPISODES } from "../../lib/script-parser"

// Which episode/beat the prompter is on. Lives in the store (not component state)
// so thunks can auto-advance to the next beat and the navbar reflects it.
export interface EpisodeSliceState {
  episodeId: string
  /** true → prompt one beat at a time; false → the whole episode as one script. */
  byBeat: boolean
  /** Index into the episode's beats; -1 = none selected yet. */
  beatIndex: number
}

const initialState: EpisodeSliceState = {
  episodeId: EPISODES[0]?.id ?? "",
  byBeat: true,
  beatIndex: -1,
}

export const episodeSlice = createAppSlice({
  name: "episode",
  initialState,
  reducers: create => ({
    setEpisodeId: create.reducer((state, action: PayloadAction<string>) => {
      state.episodeId = action.payload
      state.beatIndex = -1
    }),
    setByBeat: create.reducer((state, action: PayloadAction<boolean>) => {
      state.byBeat = action.payload
    }),
    setBeatIndex: create.reducer((state, action: PayloadAction<number>) => {
      state.beatIndex = action.payload
    }),
  }),
  selectors: {
    selectEpisodeId: state => state.episodeId,
    selectByBeat: state => state.byBeat,
    selectBeatIndex: state => state.beatIndex,
  },
})

export const { setEpisodeId, setByBeat, setBeatIndex } = episodeSlice.actions

export const { selectEpisodeId, selectByBeat, selectBeatIndex } =
  episodeSlice.selectors
