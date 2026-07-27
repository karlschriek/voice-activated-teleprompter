import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { startTeleprompter, stopTeleprompter, changeLanguage } from "../../app/thunks"

import { loadEpisodes } from "../../lib/script-parser"
import { setContent } from "../content/contentSlice"

import {
  toggleEdit,
  setFontSize,
  setMargin,
  setOpacity,
  setScrollOffset,
  setLanguage,
  selectStatus,
  selectFontSize,
  selectMargin,
  selectOpacity,
  selectScrollOffset,
  selectLanguage,
  SUPPORTED_LOCALES,
} from "./navbarSlice"

import { resetTranscriptionIndices } from "../content/contentSlice"

// Parsed once at module load (the episode glob is eager). Reading a beat from the
// dropdown loads its verbatim text into the prompter — single source of truth.
const EPISODES = loadEpisodes()

// Shared dark styling for the navbar <select>s.
const selectStyle: React.CSSProperties = {
  backgroundColor: "#1a1a1a",
  color: "#fff",
  borderColor: "#333",
}

export const NavBar = () => {
  const dispatch = useAppDispatch()

  const status = useAppSelector(selectStatus)
  const fontSize = useAppSelector(selectFontSize)
  const margin = useAppSelector(selectMargin)
  const opacity = useAppSelector(selectOpacity)
  const scrollOffset = useAppSelector(selectScrollOffset)
  const language = useAppSelector(selectLanguage)

  const [episodeId, setEpisodeId] = useState<string>(EPISODES[0]?.id ?? "")
  const selectedEpisode = EPISODES.find(ep => ep.id === episodeId) ?? EPISODES[0]

  // "By beat": when on, pick a single beat from the dropdown. When off, load the
  // whole episode — all beats combined into one continuous script.
  const [byBeat, setByBeat] = useState<boolean>(true)

  const loadBeat = (beatIndex: number) => {
    const beat = selectedEpisode?.beats[beatIndex]
    if (beat) dispatch(setContent(beat.text))
  }

  // All beats of the current episode, joined into one script. Each beat's label is
  // dropped in as a [bracket] cue so you can see where you are while reading through.
  const loadWholeEpisode = (ep = selectedEpisode) => {
    if (!ep) return
    const combined = ep.beats
      .map(b => `[${b.label}]\n\n${b.text}`)
      .join("\n\n\n")
    dispatch(setContent(combined))
  }

  return (
    <nav
      className="navbar is-black has-text-light is-unselectable"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {status === "stopped" ? (
          <div className="navbar-item" style={{ gap: "0.5rem" }}>
            {/* Episode picker — populated from the snapcd-videos episode scripts */}
            {EPISODES.length > 0 ? (
              <>
                <div className="select is-small is-dark">
                  <select
                    value={episodeId}
                    onChange={e => {
                      const newId = e.currentTarget.value
                      setEpisodeId(newId)
                      // If reading the whole episode, load the new one immediately.
                      if (!byBeat) {
                        loadWholeEpisode(EPISODES.find(ep => ep.id === newId))
                      }
                    }}
                    title="Select Episode"
                    style={selectStyle}
                  >
                    {EPISODES.map(ep => (
                      <option key={ep.id} value={ep.id}>
                        {ep.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* "By beat" toggle: on → pick one beat; off → whole episode. */}
                <label
                  className="navbar-item"
                  style={{ color: "#fff", gap: "0.35rem", cursor: "pointer" }}
                >
                  <input
                    type="checkbox"
                    checked={byBeat}
                    onChange={e => {
                      const on = e.currentTarget.checked
                      setByBeat(on)
                      if (!on) loadWholeEpisode()
                    }}
                  />
                  <span>By beat</span>
                </label>

                {/* Beat picker — only when "by beat" is on */}
                {byBeat ? (
                  <div className="select is-small is-dark">
                    <select
                      defaultValue=""
                      onChange={e => {
                        const i = parseInt(e.currentTarget.value, 10)
                        if (!Number.isNaN(i)) loadBeat(i)
                      }}
                      title="Select Beat"
                      style={selectStyle}
                    >
                      <option value="" disabled>
                        Beat…
                      </option>
                      {selectedEpisode?.beats.map((beat, i) => (
                        <option key={i} value={i}>
                          {beat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
              </>
            ) : null}

            {/* Language */}
            <div className="select is-small is-dark">
              <select
                value={language}
                onChange={e => {
                  const newLanguage = e.currentTarget.value
                  dispatch(setLanguage(newLanguage))
                  dispatch(changeLanguage(newLanguage))
                }}
                title="Select Language"
                style={selectStyle}
              >
                {Object.keys(SUPPORTED_LOCALES).map(locale => {
                  const label =
                    SUPPORTED_LOCALES[locale as keyof typeof SUPPORTED_LOCALES]
                  return (
                    <option key={locale} value={locale}>
                      {label}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        ) : null}
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          {status === "stopped" ? (
            <>
              <div className="navbar-item slider">
                <span>Font size:</span>
                <input
                  type="range"
                  step="5"
                  min="10"
                  max="200"
                  value={fontSize}
                  onChange={e =>
                    dispatch(setFontSize(parseInt(e.currentTarget.value, 10)))
                  }
                />
              </div>
              <div className="navbar-item slider">
                <span>Margin:</span>
                <input
                  type="range"
                  step="10"
                  min="0"
                  max="500"
                  value={margin}
                  onChange={e =>
                    dispatch(setMargin(parseInt(e.currentTarget.value, 10)))
                  }
                />
              </div>
              <div className="navbar-item slider">
                <span>Brightness:</span>
                <input
                  type="range"
                  step="10"
                  min="0"
                  max="100"
                  value={opacity}
                  onChange={e =>
                    dispatch(setOpacity(parseInt(e.currentTarget.value, 10)))
                  }
                />
              </div>
              <div className="navbar-item slider">
                <span>Line position:</span>
                <input
                  type="range"
                  step="10"
                  min="0"
                  max="1000"
                  value={scrollOffset}
                  onChange={e =>
                    dispatch(setScrollOffset(parseInt(e.currentTarget.value, 10)))
                  }
                />
              </div>
            </>
          ) : null}

          <div className="buttons navbar-item">
            {status !== "started" ? (
              <>
                <button
                  className={`button is-info ${status === "editing" ? "editing" : ""}`}
                  onClick={() => dispatch(toggleEdit())}
                  title="Edit"
                >
                  <span className="icon is-small">
                    <i className="fa-solid fa-pencil" />
                  </span>
                </button>
                <button
                  className="button is-info"
                  disabled={status !== "stopped"}
                  onClick={() => dispatch(resetTranscriptionIndices())}
                  title="Restart from the beginning"
                >
                  <span className="icon is-small">
                    <i className="fa-solid fa-arrows-rotate" />
                  </span>
                </button>
              </>
            ) : null}

            <button
              className="button is-info"
              disabled={status === "editing"}
              onClick={() =>
                dispatch(
                  status === "stopped" ? startTeleprompter() : stopTeleprompter(),
                )
              }
              title={
                status === "stopped" || status === "editing" ? "Start" : "Stop"
              }
            >
              <span className="icon is-small">
                <i
                  className={`fa-solid ${status === "stopped" || status === "editing" ? "fa-play" : "fa-stop"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
