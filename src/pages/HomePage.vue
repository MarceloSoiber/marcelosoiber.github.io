<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import ProjectCaseStudy from '../components/ProjectCaseStudy.vue'
import SectionHeader from '../components/SectionHeader.vue'
import SiteHeader from '../components/SiteHeader.vue'
import TelemetryCore from '../components/TelemetryCore.vue'
import { contentByLocale, isLocale, pageRoute } from '../content'
import type { Locale, Page } from '../content/schema'

const route = useRoute()
const locale = computed<Locale>(() => {
  const value = route.meta.locale
  return isLocale(value) ? value : 'pt'
})
const content = computed(() => contentByLocale[locale.value])
const currentPage = computed<Page>(() => {
  const value = route.meta.page
  return value === 'profile' || value === 'projects' || value === 'experience' ? value : 'home'
})
const canonical = computed(() => `https://marcelosoiber.dev${pageRoute(locale.value, currentPage.value)}`)
const pageTitle = computed(() => {
  if (currentPage.value === 'profile') return content.value.profile.title
  if (currentPage.value === 'projects') return content.value.projects.title
  if (currentPage.value === 'experience') return content.value.experience.title
  return content.value.meta.title
})
const email = ['marcelo.soiber', 'gmail.com'].join('@')
const contactDialog = ref<HTMLDialogElement>()
const jobTitles: Record<Locale, string> = {
  pt: 'Engenheiro de Software',
  en: 'Software Engineer',
  es: 'Ingeniero de Software',
}

useHead(() => ({
  title: currentPage.value === 'home' ? pageTitle.value : `${pageTitle.value} — Marcelo Soiber`,
  htmlAttrs: { lang: content.value.htmlLang },
  meta: [
    { name: 'description', content: content.value.meta.description },
    { name: 'author', content: 'Marcelo Soiber' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Marcelo Soiber' },
    { property: 'og:title', content: pageTitle.value },
    { property: 'og:description', content: content.value.meta.description },
    { property: 'og:url', content: canonical.value },
    { property: 'og:image', content: 'https://marcelosoiber.dev/images/social-card.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle.value },
    { name: 'twitter:description', content: content.value.meta.description },
  ],
  link: [
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', hreflang: 'pt-BR', href: `https://marcelosoiber.dev${pageRoute('pt', currentPage.value)}` },
    { rel: 'alternate', hreflang: 'en', href: `https://marcelosoiber.dev${pageRoute('en', currentPage.value)}` },
    { rel: 'alternate', hreflang: 'es', href: `https://marcelosoiber.dev${pageRoute('es', currentPage.value)}` },
    { rel: 'alternate', hreflang: 'x-default', href: `https://marcelosoiber.dev${pageRoute('pt', currentPage.value)}` },
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

function initializeReveals() {
  observer?.disconnect()

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
}

function openContact() {
  if (!contactDialog.value?.open) contactDialog.value?.showModal()
}

function closeContact() {
  contactDialog.value?.close()
}

function closeContactOnBackdrop(event: MouseEvent) {
  if (event.target === contactDialog.value) closeContact()
}

onMounted(() => {
  initializeReveals()

  if (window.location.hash === '#contato') openContact()
})

watch(currentPage, async () => {
  await nextTick()
  initializeReveals()
})

onBeforeUnmount(() => {
  observer?.disconnect()
  closeContact()
})
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
      :current-page="currentPage"
      @open-contact="openContact"
    />

    <main id="main" :class="{ 'inner-page': currentPage !== 'home' }">
      <section v-if="currentPage === 'home'" class="hero" aria-labelledby="hero-title">
        <div class="hero__copy">
          <p class="eyebrow hero__eyebrow">{{ content.hero.eyebrow }}</p>
          <h1 id="hero-title">
            {{ content.hero.titleLead }}
            <strong>{{ content.hero.titleFocus }}</strong>
          </h1>
          <p class="hero__description">{{ content.hero.description }}</p>
          <div class="hero__actions">
            <RouterLink class="button button--primary" :to="pageRoute(locale, 'projects')">
              {{ content.hero.primaryCta }}
              <span aria-hidden="true">↘</span>
            </RouterLink>
            <a
              class="button button--ghost"
              :href="content.contact.resumeHref"
              :download="content.contact.resumeFilename"
            >
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

      <section v-if="currentPage === 'profile'" id="perfil" class="profile section-shell page-section">
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

      <section v-if="currentPage === 'profile'" class="capabilities section-shell">
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

      <section
        v-if="currentPage === 'projects' || currentPage === 'home'"
        id="projetos"
        class="projects section-shell"
        :class="{ 'projects--featured': currentPage === 'home' }"
      >
        <SectionHeader
          :eyebrow="content.projects.eyebrow"
          :title="content.projects.title"
          :description="content.projects.description"
        />

        <div class="projects__list">
          <ProjectCaseStudy
            v-for="(project, index) in currentPage === 'home' ? content.projects.items.slice(0, 1) : content.projects.items"
            :key="project.id"
            :project="project"
            :position="index"
            :repository-label="content.projects.repositoryLabel"
            :challenge-label="content.projects.challengeLabel"
            :decision-label="content.projects.decisionLabel"
            :result-label="content.projects.resultLabel"
          />
        </div>

        <RouterLink
          v-if="currentPage === 'home'"
          class="section-more"
          :to="pageRoute(locale, 'projects')"
        >
          {{ content.hero.primaryCta }} <span aria-hidden="true">→</span>
        </RouterLink>
      </section>

      <section v-if="currentPage === 'experience'" id="experiencia" class="experience section-shell page-section">
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

      <section v-if="currentPage === 'projects'" class="notes section-shell">
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
            :href="`${pageRoute(locale, 'projects')}#${note.projectId}`"
          >
            <span>{{ note.code }}</span>
            <h3>{{ note.title }}</h3>
            <p>{{ note.text }}</p>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <RouterLink class="brand" :to="pageRoute(locale, 'home')" :aria-label="content.brandLabel">
        <span class="brand__mark" aria-hidden="true">MS</span>
        <span class="brand__slash" aria-hidden="true">//</span>
        <span class="brand__suffix">DEV</span>
      </RouterLink>
      <p>{{ content.footer }}</p>
      <a href="#top">TOP ↑</a>
    </footer>

    <dialog
      id="contato"
      ref="contactDialog"
      class="contact-modal"
      :aria-label="content.contact.dialogLabel"
      @click="closeContactOnBackdrop"
    >
      <div class="contact-modal__frame">
        <div class="contact-modal__status" aria-hidden="true">
          <span>CONTACT.NODE</span>
          <i></i>
          <span>CHANNEL // OPEN</span>
        </div>

        <button
          class="contact-modal__close"
          type="button"
          :aria-label="content.contact.closeLabel"
          @click="closeContact"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div class="contact-modal__grid">
          <figure class="contact-modal__portrait">
            <div class="contact-modal__portrait-frame">
              <img
                src="/images/marcelo-soiber-linkedin.jpg"
                :alt="content.contact.photoAlt"
                width="200"
                height="200"
              />
            </div>
            <figcaption>
              <span>MS.01</span>
              <strong>Marcelo Soiber</strong>
              <small>{{ content.contact.location }}</small>
            </figcaption>
          </figure>

          <div class="contact-modal__content">
            <p class="eyebrow">{{ content.contact.eyebrow }}</p>
            <p class="contact-modal__role">{{ content.contact.role }}</p>
            <h2>{{ content.contact.title }}</h2>
            <p class="contact-modal__description">{{ content.contact.description }}</p>

            <div class="contact-modal__links">
              <a class="contact-action contact-action--email" :href="`mailto:${email}`">
                <span>{{ content.contact.emailLabel }}</span>
                <strong>{{ email }}</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a
                class="contact-action"
                href="https://www.linkedin.com/in/marcelo-soiber-6a87644a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{{ content.contact.linkedinLabel }}</span>
                <strong>/in/marcelo-soiber</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a
                class="contact-action"
                href="https://github.com/MarceloSoiber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{{ content.contact.githubLabel }}</span>
                <strong>@MarceloSoiber</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a
                class="contact-action"
                :href="content.contact.resumeHref"
                :download="content.contact.resumeFilename"
              >
                <span>{{ content.contact.resumeLabel }}</span>
                <strong>{{ content.contact.resumeLanguage }}</strong>
                <i aria-hidden="true">↓</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>
