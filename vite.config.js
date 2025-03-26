import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure Vite looks in the right directory
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Ensure correct entry point
    },
  },
})
