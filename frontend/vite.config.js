import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000,
    proxy: {
      "/dashboared/": "https://localhost:5000",
      "/form/": "https://localhost:5000",
    }
  },
})

