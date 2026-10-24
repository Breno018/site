import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: caminho do site no GitHub Pages (https://breno018.github.io/site/)
export default defineConfig({
  plugins: [react()],
  base: '/site/',
})
