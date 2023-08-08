import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Note: should rename css.gz/js.gz back to css/js after compression.
    viteCompression({
      algorithm: 'gzip',
      verbose: false,
      deleteOriginFile: true,
      threshold: 10240, // 10kb
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // https://vitejs.dev/config/server-options.html#server-proxy
  server: {
    open: true,
    proxy: {
      // http://localhost:5173/api/ping -> http://localhost:8081/ping
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
