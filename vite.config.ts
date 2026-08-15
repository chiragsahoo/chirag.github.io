import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User/org GitHub Pages site (chirag.github.io) and Vercel both use root base.
  // For a project site, set base to '/repo-name/' instead.
  base: '/',
})
