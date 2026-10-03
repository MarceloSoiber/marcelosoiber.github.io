<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import ProjectCaseStudy from '../components/ProjectCaseStudy.vue'
import SectionHeader from '../components/SectionHeader.vue'
import SiteHeader from '../components/SiteHeader.vue'
import TelemetryCore from '../components/TelemetryCore.vue'
import { contentByLocale, isLocale, localeRoutes } from '../content'
import type { Locale } from '../content/schema'

const route = useRoute()
const locale = computed<Locale>(() => {
  const value = route.meta.locale
  return isLocale(value) ? value : 'pt'
})
const content = computed(() => contentByLocale[locale.value])
const canonical = computed(() => `https://marcelosoiber.dev${localeRoutes[locale.value]}`)
const email = ['marcelo.soiber', 'gmail.com'].join('@')
const jobTitles: Record<Locale, string> = {
  pt: 'Engenheiro de Software',
  en: 'Software Engineer',
  es: 'Ingeniero de Software',
}

useHead(() => ({
  title: content.value.meta.title,
  htmlAttrs: { lang: content.value.htmlLang },
  meta: [
    { name: 'description', content: content.value.meta.description },
    { name: 'author', content: 'Marcelo Soiber' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Marcelo Soiber' },
    { property: 'og:title', content: content.value.meta.title },
    { property: 'og:description', content: content.value.meta.description },
    { property: 'og:url', content: canonical.value },
    { property: 'og:image', content: 'https://marcelosoiber.dev/images/social-card.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: content.value.meta.title },
    { name: 'twitter:description', content: content.value.meta.description },
  ],
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'pt-BR', href: 'https://marcelosoiber.dev/' },
    { rel: 'alternate', hreflang: 'en', href: 'https://marcelosoiber.dev/en/' },
    { rel: 'alternate', hreflang: 'es', href: 'https://marcelosoiber.dev/es/' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://marcelosoiber.dev/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Marcelo Soiber',
        url: canonical.value,
        jobTitle: jobTitles[locale.value],
        sameAs: [
          'https://github.com/MarceloSoiber',
          'https://www.linkedin.com/in/marcelo-soiber-6a87644a/',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Tubarão',
          addressRegion: 'SC',
          addressCountry: 'BR',
        },
      }),
    },
  ],
}))

let observer: IntersectionObserver | undefined

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const elements = document.querySelectorAll<HTMLElement>('.reveal')

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  document.documentElement.classList.add('has-motion')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )

  elements.forEach((element) => observer?.observe(element))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div id="top" class="site-shell">
    <a class="skip-link" href="#main">{{ content.skipLink }}</a>
    <div class="site-texture" aria-hidden="true"></div>
    <div class="site-scanline" aria-hidden="true"></div>

    <SiteHeader
      :locale="locale"
      :brand-label="content.brandLabel"
      :availability="content.availability"
      :navigation-label="content.navigationLabel"
      :language-label="content.languageLabel"
      :nav="content.nav"
    />

    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__copy">
          <p class="eyebrow hero__eyebrow">{{ content.hero.eyebrow }}</p>
          <h1 id="hero-title">
            {{ content.hero.titleLead }}
            <strong>{{ content.hero.titleFocus }}</strong>
          </h1>
          <p class="hero__description">{{ content.hero.description }}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="#projetos">
              {{ content.hero.primaryCta }}
              <span aria-hidden="true">↘</span>
            </a>
            <a class="button button--ghost" :href="content.contact.resumeHref" download>
              {{ content.hero.secondaryCta }}
            </a>
          </div>
          <div class="hero__diagnostics" aria-hidden="true">
            <span>LATENCY 12MS</span>
            <span>UPLINK SECURE</span>
            <span>NODE BR-SC</span>
          </div>
        </div>

        <TelemetryCore
          :label="content.hero.telemetryLabel"
          :value="content.hero.telemetryValue"
          :status="content.hero.statusLabel"
        />

        <div class="hero__rail" aria-hidden="true">
          <span>MS.SYS/2026</span>
          <i></i>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      <section id="perfil" class="profile section-shell">
        <SectionHeader :eyebrow="content.profile.eyebrow" :title="content.profile.title" />

        <div class="profile__grid reveal">
          <p class="profile__lead">{{ content.profile.lead }}</p>
          <p class="profile__body">{{ content.profile.body }}</p>
          <dl class="metric-grid">
            <div v-for="metric in content.profile.metrics" :key="metric.label">
              <dt>{{ metric.value }}</dt>
              <dd>{{ metric.label }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="capabilities section-shell">
        <SectionHeader
          :eyebrow="content.capabilities.eyebrow"
          :title="content.capabilities.title"
          :description="content.capabilities.description"
        />

        <div class="capability-grid">
          <article
            v-for="(capability, index) in content.capabilities.items"
            :key="capability.index"
            class="capability-card reveal"
            :style="{ '--delay': `${index * 80}ms` }"
          >
            <div class="capability-card__index">{{ capability.index }}</div>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.description }}</p>
            <ul>
              <li v-for="technology in capability.technologies" :key="technology">
                {{ technology }}
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projetos" class="projects section-shell">
        <SectionHeader
          :eyebrow="content.projects.eyebrow"
          :title="content.projects.title"
          :description="content.projects.description"
        />

        <div class="projects__list">
          <ProjectCaseStudy
            v-for="(project, index) in content.projects.items"
            :key="project.id"
            :project="project"
            :position="index"
            :repository-label="content.projects.repositoryLabel"
            :challenge-label="content.projects.challengeLabel"
            :decision-label="content.projects.decisionLabel"
            :result-label="content.projects.resultLabel"
          />
        </div>
      </section>

      <section id="experiencia" class="experience section-shell">
        <SectionHeader :eyebrow="content.experience.eyebrow" :title="content.experience.title" />

        <ol class="timeline">
          <li
            v-for="(item, index) in content.experience.items"
            :key="`${item.period}-${item.title}`"
            class="timeline__item reveal"
            :class="{ 'is-current': item.current }"
            :style="{ '--delay': `${index * 60}ms` }"
          >
            <div class="timeline__marker" aria-hidden="true">
              <span></span>
            </div>
            <time>{{ item.period }}</time>
            <div>
              <h3>{{ item.title }}</h3>
              <p class="timeline__organization">{{ item.organization }}</p>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section class="notes section-shell">
        <SectionHeader
          :eyebrow="content.notes.eyebrow"
          :title="content.notes.title"
          :description="content.notes.description"
        />

        <div class="notes__grid">
          <a
            v-for="(note, index) in content.notes.items"
            :key="note.code"
            class="note-card reveal"
            :style="{ '--delay': `${index * 80}ms` }"
            :href="`#${note.projectId}`"
          >
            <span>{{ note.code }}</span>
            <h3>{{ note.title }}</h3>
            <p>{{ note.text }}</p>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <section id="contato" class="contact section-shell">
        <div class="contact__panel reveal">
          <div class="contact__signal" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <p class="eyebrow">{{ content.contact.eyebrow }}</p>
          <h2>{{ content.contact.title }}</h2>
          <p>{{ content.contact.description }}</p>

          <div class="contact__links">
            <a class="contact-link contact-link--email" :href="`mailto:${email}`">
              <span>{{ content.contact.emailLabel }}</span>
              <strong>{{ email }}</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              class="contact-link"
              href="https://www.linkedin.com/in/marcelo-soiber-6a87644a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{ content.contact.linkedinLabel }}</span>
              <strong>/in/marcelo-soiber</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a
              class="contact-link"
              href="https://github.com/MarceloSoiber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{ content.contact.githubLabel }}</span>
              <strong>@MarceloSoiber</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a class="contact-link" :href="content.contact.resumeHref" download>
              <span>{{ content.contact.resumeLabel }}</span>
              <strong>PDF · PT-BR</strong>
              <i aria-hidden="true">↓</i>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <a class="brand" href="#top" :aria-label="content.brandLabel">
        <span class="brand__mark" aria-hidden="true">MS</span>
        <span class="brand__slash" aria-hidden="true">//</span>
        <span class="brand__suffix">DEV</span>
      </a>
      <p>{{ content.footer }}</p>
      <a href="#top">TOP ↑</a>
    </footer>
  </div>
</template>
