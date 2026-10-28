import { describe, expect, it } from 'vitest'
import { contentByLocale, localeRoutes, pageRoute } from '../src/content'

describe('localized portfolio content', () => {
  it('defines all supported locales and paths', () => {
    expect(Object.keys(contentByLocale).sort()).toEqual(['en', 'es', 'pt'])
    expect(localeRoutes).toEqual({ pt: '/', en: '/en/', es: '/es/' })
  })

  it('creates localized page routes', () => {
    expect(pageRoute('pt', 'projects')).toBe('/projetos/')
    expect(pageRoute('en', 'profile')).toBe('/en/profile/')
    expect(pageRoute('es', 'experience')).toBe('/es/experiencia/')
  })

  it('keeps the same project ids and valid repositories across locales', () => {
    const expectedIds = contentByLocale.pt.projects.items.map((project) => project.id)

    for (const content of Object.values(contentByLocale)) {
      expect(content.projects.items.map((project) => project.id)).toEqual(expectedIds)
      for (const project of content.projects.items) {
        expect(project.repository).toMatch(/^https:\/\/github\.com\/MarceloSoiber\//)
        expect(project.image).toMatch(/^\/images\/.+\.(svg|png)$/)
        expect(project.details.status.trim()).not.toBe('')
        expect(project.details.period.trim()).not.toBe('')
        expect(project.details.role.trim()).not.toBe('')

        for (const section of [
          project.details.overview,
          project.details.features,
          project.details.architecture,
          project.details.tradeoffs,
          project.details.outcomes,
          project.details.nextSteps,
        ]) {
          expect(section.length).toBeGreaterThan(0)
          expect(section.every((item) => item.trim().length > 0)).toBe(true)
        }
      }

      expect(Object.values(content.projects.details).every((label) => label.trim().length > 0)).toBe(true)
    }
  })

  it('keeps equivalent navigation and content collections', () => {
    const baseline = contentByLocale.pt

    for (const content of Object.values(contentByLocale)) {
      expect(content.nav).toHaveLength(baseline.nav.length)
      expect(content.nav.map((item) => item.page)).toEqual(['profile', 'projects', 'experience', 'contact'])
      expect(content.capabilities.items).toHaveLength(baseline.capabilities.items.length)
      expect(content.experience.items).toHaveLength(baseline.experience.items.length)
      expect(content.notes.items).toHaveLength(baseline.notes.items.length)
      expect(content.contact.about).toHaveLength(baseline.contact.about.length)
      expect(content.contact.about.every((paragraph) => paragraph.trim().length > 0)).toBe(true)
      expect(content.contact.highlights).toHaveLength(baseline.contact.highlights.length)
      expect(
        content.contact.highlights.every(
          (highlight) => highlight.value.trim().length > 0 && highlight.label.trim().length > 0,
        ),
      ).toBe(true)
      expect(content.meta.title.length).toBeGreaterThan(20)
      expect(content.meta.description.length).toBeGreaterThan(70)
    }
  })
})
