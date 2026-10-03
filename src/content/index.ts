import { en } from './en'
import { es } from './es'
import { pt } from './pt'
import type { Locale, SiteContent } from './schema'

export const contentByLocale: Record<Locale, SiteContent> = { pt, en, es }

export const localeRoutes: Record<Locale, string> = {
  pt: '/',
  en: '/en/',
  es: '/es/',
}

export function isLocale(value: unknown): value is Locale {
  return value === 'pt' || value === 'en' || value === 'es'
}
