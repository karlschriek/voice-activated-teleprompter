import { useAppDispatch, useAppSelector } from "../../app/hooks"

import {
  startTeleprompter,
  stopTeleprompter,
  changeLanguage,
  loadBeat,
  loadWholeEpisode,
  skipBeat,
} from "../../app/thunks"

import { EPISODES } from "../../lib/script-parser"

import {
  toggleEdit,
  setFontSize,
  setMargin,
  setOpacity,
  setLanguage,
  selectStatus,
  selectFontSize,
  selectMargin,
  selectOpacity,
  selectLanguage,
  SUPPORTED_LOCALES,
} from "./navbarSlice"

import { resetTranscriptionIndices } from "../content/contentSlice"

import {
  setEpisodeId,
  setByBeat,
  selectEpisodeId,
  selectByBeat,
  selectBeatIndex,
} from "../episode/episodeSlice"

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
  const language = useAppSelector(selectLanguage)

  const episodeId = useAppSelector(selectEpisodeId)
  // "By beat": when on, pick a single beat from the dropdown. When off, load the
  // whole episode — all beats combined into one continuous script.
  const byBeat = useAppSelector(selectByBeat)
  const beatIndex = useAppSelector(selectBeatIndex)
  const selectedEpisode = EPISODES.find(ep => ep.id === episodeId) ?? EPISODES[0]

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
                      dispatch(setEpisodeId(newId))
                      // If reading the whole episode, load the new one immediately.
                      if (!byBeat) {
                        dispatch(loadWholeEpisode(newId))
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
                      dispatch(setByBeat(on))
                      if (!on) dispatch(loadWholeEpisode())
                    }}
                  />
                  <span>By beat</span>
                </label>

                {/* Beat picker — only when "by beat" is on */}
                {byBeat ? (
                  <div className="select is-small is-dark">
                    <select
                      value={beatIndex === -1 ? "" : String(beatIndex)}
                      onChange={e => {
                        const i = parseInt(e.currentTarget.value, 10)
                        if (!Number.isNaN(i)) dispatch(loadBeat(i))
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
                <span className="slider-value">{fontSize}</span>
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
                <span className="slider-value">{margin}</span>
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
                <span className="slider-value">{opacity}</span>
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
              disabled={status === "editing" || EPISODES.length === 0}
              onClick={() => dispatch(skipBeat())}
              title="Skip to next beat (N / PageDown)"
            >
              <span className="icon is-small">
                <i className="fa-solid fa-forward-step" />
              </span>
            </button>

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
