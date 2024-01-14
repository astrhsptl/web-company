import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
  },
  resolve: {
      alias: { '@': path.resolve(__dirname, './src') },
  },
  plugins: [react()],
})
