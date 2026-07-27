import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// The episode scripts live in a sibling package (../snapcd-videos/episodes), so the
// prompter reads them as the single source of truth rather than duplicating text.
// Vite blocks filesystem access outside the project root by default, so we allow the
// parent `support/` dir, and alias `@episodes` to the scripts folder for the glob.
const episodesDir = resolve(__dirname, "../snapcd-videos/episodes")

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    // Always use 5173; fail loudly if it's taken (rather than silently hopping to
    // 5174/5175, which left stray servers running and changed the URL each time).
    port: 5173,
    strictPort: true,
    fs: {
      // Allow serving files from the shared `support/` parent so the glob can reach
      // the sibling snapcd-videos episodes.
      allow: [resolve(__dirname, ".."), __dirname],
    },
  },
  resolve: {
    alias: {
      bulma: resolve(__dirname, "node_modules/bulma/bulma.sass"),
      "@episodes": episodesDir,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // The Sass deprecation warnings (@import, global-builtin) all originate
        // inside Bulma 0.9.4's own source, not our code — silence them so the dev
        // console isn't flooded. Fixing them for real means upgrading to Bulma 1.x,
        // a breaking change that rewrites the variable system we rely on.
        quietDeps: true,
        silenceDeprecations: ["import", "global-builtin", "color-functions"],
      },
    },
  },
})
