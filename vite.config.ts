import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    base: "/github-pages-test/",
    plugins: [react()],
})
