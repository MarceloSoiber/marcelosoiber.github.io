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
    includedRoutes: () => [
      '/',
      '/perfil/',
      '/projetos/',
      '/experiencia/',
      '/en/',
      '/en/profile/',
      '/en/projects/',
      '/en/experience/',
      '/es/',
      '/es/perfil/',
      '/es/proyectos/',
      '/es/experiencia/',
    ],
  },
})
