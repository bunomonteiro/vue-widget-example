import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    // se necessário:
    'process.env': {},
    'process': {},
  },
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'ChatbotWidget',
      fileName: (format) => `chatbot.${format}.js`,
      formats: ['es', 'umd', 'iife'], // para usar via <script>
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
