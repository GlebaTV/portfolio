import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio',
  plugins: [react()],
  
  server: {
    port:3004,
  },
  css : {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }

    }
  }
})
