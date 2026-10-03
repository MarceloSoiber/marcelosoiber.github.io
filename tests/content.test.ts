import { describe, expect, it } from 'vitest'
import { contentByLocale, localeRoutes } from '../src/content'

describe('localized portfolio content', () => {
  it('defines all supported locales and paths', () => {
    expect(Object.keys(contentByLocale).sort()).toEqual(['en', 'es', 'pt'])
    expect(localeRoutes).toEqual({ pt: '/', en: '/en/', es: '/es/' })
  })

  it('keeps the same project ids and valid repositories across locales', () => {
    const expectedIds = contentByLocale.pt.projects.items.map((project) => project.id)

    for (const content of Object.values(contentByLocale)) {
      expect(content.projects.items.map((project) => project.id)).toEqual(expectedIds)
      for (const project of content.projects.items) {
        expect(project.repository).toMatch(/^https:\/\/github\.com\/MarceloSoiber\//)
        expect(project.image).toMatch(/^\/images\/.+\.svg$/)
      }
    }
  })

  it('keeps equivalent navigation and content collections', () => {
    const baseline = contentByLocale.pt

    for (const content of Object.values(contentByLocale)) {
      expect(content.nav).toHaveLength(baseline.nav.length)
      expect(content.capabilities.items).toHaveLength(baseline.capabilities.items.length)
      expect(content.experience.items).toHaveLength(baseline.experience.items.length)
      expect(content.notes.items).toHaveLength(baseline.notes.items.length)
      expect(content.meta.title.length).toBeGreaterThan(20)
      expect(content.meta.description.length).toBeGreaterThan(70)
    }
  })
})
