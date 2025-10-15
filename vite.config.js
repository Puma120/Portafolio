import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones de build
    target: 'es2015',
    minify: 'esbuild', // Usar esbuild en lugar de terser (más rápido y no requiere dependencia extra)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Optimizar assets
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Optimizaciones de desarrollo
    hmr: {
      overlay: false,
    },
  },
})
