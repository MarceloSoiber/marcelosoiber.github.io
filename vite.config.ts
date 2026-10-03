import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    target: 'es2022',
    cssCodeSplit: true,
    sourcemap: false,
  },
  ssgOptions: {
    script: 'defer',
    formatting: 'minify',
    includedRoutes: () => ['/', '/en/', '/es/'],
  },
})
