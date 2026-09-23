import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    // GitHub Pages serves project sites from /<repository-name>/.
    base: "/github-pages-test/",
    plugins: [react()],
})
