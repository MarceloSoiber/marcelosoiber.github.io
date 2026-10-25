<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { pageRoute } from '../content'
import type { Locale, NavItem, Page } from '../content/schema'

defineProps<{
  locale: Locale
  brandLabel: string
  availability: string
  navigationLabel: string
  languageLabel: string
  nav: NavItem[]
  currentPage: Page
}>()

const menuOpen = ref(false)
const emit = defineEmits<{
  openContact: []
}>()

function closeMenu() {
  menuOpen.value = false
}

function openContact() {
  closeMenu()
  emit('openContact')
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="brand" :to="pageRoute(locale, 'home')" :aria-label="brandLabel" @click="closeMenu">
        <span class="brand__mark" aria-hidden="true">MS</span>
        <span class="brand__slash" aria-hidden="true">//</span>
        <span class="brand__suffix">DEV</span>
      </RouterLink>

      <p class="system-status">
        <span class="system-status__pulse" aria-hidden="true"></span>
        {{ availability }}
      </p>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="site-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Menu</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div id="site-navigation" class="site-header__panel" :class="{ 'is-open': menuOpen }">
        <nav class="site-nav" :aria-label="navigationLabel">
          <template v-for="item in nav" :key="item.page">
            <button
              v-if="item.page === 'contact'"
              class="site-nav__contact"
              type="button"
              @click="openContact"
            >
              {{ item.label }}
              <span aria-hidden="true">↗</span>
            </button>
            <RouterLink
              v-else
              :to="pageRoute(locale, item.page)"
              :aria-current="currentPage === item.page ? 'page' : undefined"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
          </template>
        </nav>

        <nav class="language-nav" :aria-label="languageLabel">
          <RouterLink
            v-for="option in (['pt', 'en', 'es'] as Locale[])"
            :key="option"
            :to="pageRoute(option, currentPage)"
            :hreflang="option === 'pt' ? 'pt-BR' : option"
            :aria-current="locale === option ? 'page' : undefined"
            @click="closeMenu"
          >
            {{ option.toUpperCase() }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
