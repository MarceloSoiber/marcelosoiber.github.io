<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { localeRoutes } from '../content'
import type { Locale, NavItem } from '../content/schema'

defineProps<{
  locale: Locale
  brandLabel: string
  availability: string
  navigationLabel: string
  languageLabel: string
  nav: NavItem[]
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
      <a class="brand" href="#top" :aria-label="brandLabel" @click="closeMenu">
        <span class="brand__mark" aria-hidden="true">MS</span>
        <span class="brand__slash" aria-hidden="true">//</span>
        <span class="brand__suffix">DEV</span>
      </a>

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
          <template v-for="item in nav" :key="item.href">
            <button
              v-if="item.href === '#contato'"
              class="site-nav__contact"
              type="button"
              @click="openContact"
            >
              {{ item.label }}
              <span aria-hidden="true">↗</span>
            </button>
            <a v-else :href="item.href" @click="closeMenu">{{ item.label }}</a>
          </template>
        </nav>

        <nav class="language-nav" :aria-label="languageLabel">
          <RouterLink
            v-for="option in (['pt', 'en', 'es'] as Locale[])"
            :key="option"
            :to="localeRoutes[option]"
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
