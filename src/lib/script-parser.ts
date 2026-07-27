// Parses an episode `script.md` into teleprompter beats.
//
// Single source of truth: the spoken text is authored ONCE in the episode script's
// `>` blockquotes, and the prompter derives its beats from there — no duplicate copy.
//
// Rules (agreed with Karl):
//   - A beat starts at a heading: `## N — ...` or a bold sub-beat `**Na — ...**`.
//   - The beat's prompter text is exactly its `>` blockquote lines, VERBATIM:
//     slashes (`/`), emphasis markers (`**bold**`, `*italic*`) and `[bracket]` hints
//     are all left as-is. (The recognizer ignores `[...]`; nothing is stripped here.)
//   - Everything else — italic director's notes, tables, prose, `---` — is ignored.
//   - A beat with no blockquote text (silent beats like Intro/Outro) is omitted.

export type Beat = {
  /** Short label for the dropdown, e.g. "2 — Thesis" or "3a — Growth". */
  label: string
  /** Verbatim spoken text (blockquote lines joined), markers preserved. */
  text: string
}

export type Episode = {
  /** Slug from the directory name, e.g. "ep01-introducing-snapcd". */
  id: string
  /** Human label for the dropdown, e.g. "ep01 · introducing snapcd". */
  label: string
  beats: Beat[]
}

// `## 2 — Thesis · *7s* · **ON CAMERA**`  → captures "2 — Thesis · *7s* · ..."
const H2 = /^##\s+(.+?)\s*$/
// `**3a — Growth** *(21s)*`  → captures "3a — Growth"
const BOLD_BEAT = /^\*\*\s*([0-9]+[a-z]?\s*[—-].+?)\s*\*\*/

/** Trim a heading down to a compact dropdown label (drop the `· *7s* ·` metadata tail). */
const cleanLabel = (raw: string): string => {
  // Keep everything up to the first `·` separator; strip stray markdown.
  const head = raw.split("·")[0]
  return head.replace(/\*\*/g, "").replace(/\*/g, "").trim()
}

/** Is this line a beat heading? Returns its label, or null. */
const headingLabel = (line: string): string | null => {
  const h2 = line.match(H2)
  if (h2) return cleanLabel(h2[1])
  const bold = line.match(BOLD_BEAT)
  if (bold) return cleanLabel(bold[1])
  return null
}

export const parseScript = (id: string, markdown: string): Episode => {
  const lines = markdown.split("\n")
  const beats: Beat[] = []

  let currentLabel: string | null = null
  let currentQuote: string[] = []

  const flush = () => {
    if (currentLabel !== null) {
      // Join blockquote lines; a blank quote line separates paragraphs.
      const text = currentQuote.join("\n").replace(/\n{3,}/g, "\n\n").trim()
      if (text.length > 0) {
        beats.push({ label: currentLabel, text })
      }
    }
    currentQuote = []
  }

  for (const line of lines) {
    const label = headingLabel(line)
    if (label !== null) {
      flush()
      currentLabel = label
      continue
    }
    // Collect blockquote content for the current beat. `>` or `> ` prefix; a bare
    // `>` is a paragraph break inside the quote.
    const q = line.match(/^>\s?(.*)$/)
    if (q && currentLabel !== null) {
      currentQuote.push(q[1])
    }
  }
  flush()

  const label = id
    .replace(/^(ep\d+)-/, "$1 · ")
    .replace(/-/g, " ")

  return { id, label, beats }
}

// Load every episode script at build/dev time. `import.meta.glob` with `as: "raw"`
// gives the file contents as strings; `eager` so they're available synchronously.
// The alias `@episodes` points at ../snapcd-videos/episodes (see vite.config.ts).
const modules = import.meta.glob("@episodes/*/script.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>

/** All episodes, parsed and sorted by id, each with its beats. */
export const loadEpisodes = (): Episode[] => {
  return Object.entries(modules)
    .map(([path, raw]) => {
      // path like ".../episodes/ep01-introducing-snapcd/script.md"
      const m = path.match(/episodes\/([^/]+)\/script\.md$/)
      const id = m ? m[1] : path
      return parseScript(id, raw)
    })
    .filter(ep => ep.beats.length > 0)
    .sort((a, b) => a.id.localeCompare(b.id))
}
