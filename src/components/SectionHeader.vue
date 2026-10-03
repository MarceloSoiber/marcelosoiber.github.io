<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="section-heading reveal">
    <div class="section-heading__index">
      <span class="section-heading__dot" aria-hidden="true"></span>
      {{ eyebrow }}
    </div>
    <div class="section-heading__copy">
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
    </div>
  </header>
</template>
