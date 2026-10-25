import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import { pageRoute } from './content'
import type { Locale, Page } from './content/schema'
import '@fontsource/space-grotesk/latin-500.css'
import '@fontsource/space-grotesk/latin-600.css'
import '@fontsource/space-grotesk/latin-700.css'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-600.css'
import './styles/main.css'

const locales: Locale[] = ['pt', 'en', 'es']
const pages: Page[] = ['home', 'profile', 'projects', 'experience']
const routes = locales.flatMap((locale) =>
  pages.map((page) => ({
    path: pageRoute(locale, page),
    component: HomePage,
    meta: { locale, page },
  })),
)

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (to.path !== from.path) return { top: 0 }
    return undefined
  },
})
