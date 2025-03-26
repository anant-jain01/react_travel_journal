import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './', // Ensures Vite looks in the project root
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Ensure correct entry point
    },
  },
})
