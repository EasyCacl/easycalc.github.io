import { defineConfig } from 'vite'

// Default to root for GitHub Pages user/org sites; allow override via env.
const repoBase = '/'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || repoBase,
  server: {
    port: 5173
  },
  build: {
    sourcemap: true
  }
})

