import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000,
    proxy: {
      "/dashboared/": "https://safeerxkhan.netlify.app",
      "/form/": "https://safeerxkhan.netlify.app",
    }
  },
})

