import { defineConfig } from 'vite'

// Base path for GitHub Pages project site
const repoBase = '/easycalc.github.io/'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || repoBase,
  server: {
    port: 5173
  },
  build: {
    sourcemap: true
  }
})

