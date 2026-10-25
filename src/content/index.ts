import { en } from './en'
import { es } from './es'
import { pt } from './pt'
import type { Locale, Page, SiteContent } from './schema'

export const contentByLocale: Record<Locale, SiteContent> = { pt, en, es }

export const localeRoutes: Record<Locale, string> = {
  pt: '/',
  en: '/en/',
  es: '/es/',
}

const pageSlugs: Record<Locale, Record<Exclude<Page, 'home'>, string>> = {
  pt: { profile: 'perfil', projects: 'projetos', experience: 'experiencia' },
  en: { profile: 'profile', projects: 'projects', experience: 'experience' },
  es: { profile: 'perfil', projects: 'proyectos', experience: 'experiencia' },
}

export function pageRoute(locale: Locale, page: Page): string {
  if (page === 'home') return localeRoutes[locale]
  return `${localeRoutes[locale]}${pageSlugs[locale][page]}/`
}

export function isLocale(value: unknown): value is Locale {
  return value === 'pt' || value === 'en' || value === 'es'
}
