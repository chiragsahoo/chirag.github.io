import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages URL: https://chiragsahoo.github.io/chirag.github.io/
  // (Repo is chirag.github.io under user chiragsahoo — not a user-site root.)
  base: '/chirag.github.io/',
})
