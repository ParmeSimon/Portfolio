import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => fonctionne en local et sur GitHub Pages (/Portfolio/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
