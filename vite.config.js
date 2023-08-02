import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: {
        // @import "./src/styles/scss/main.scss" // Global public style
        // @import "@/styles/scss/_animations.scss",
        // @import "./src/styles/_variables.scss",
        // @import "./src/styles/_mixins.scss",
        // @import "./src/styles/_helpers.scss"
      }
    }
  }
})
