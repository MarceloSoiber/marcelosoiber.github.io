<script setup lang="ts">
import type { Project } from '../content/schema'

defineProps<{
  project: Project
  position: number
  repositoryLabel: string
  challengeLabel: string
  decisionLabel: string
  resultLabel: string
}>()
</script>

<template>
  <article
    :id="project.id"
    class="project reveal"
    :class="[`project--${project.accent}`, { 'project--reverse': position % 2 === 1 }]"
  >
    <div class="project__visual">
      <div class="project__visual-head">
        <span>{{ project.index }}</span>
        <span>LIVE CASE STUDY</span>
      </div>
      <img :src="project.image" :alt="project.imageAlt" width="800" height="520" loading="lazy" />
      <div class="project__visual-grid" aria-hidden="true"></div>
    </div>

    <div class="project__content">
      <p class="project__eyebrow">{{ project.eyebrow }}</p>
      <h3>{{ project.name }}</h3>
      <p class="project__summary">{{ project.summary }}</p>

      <dl class="project__decisions">
        <div>
          <dt>{{ challengeLabel }}</dt>
          <dd>{{ project.challenge }}</dd>
        </div>
        <div>
          <dt>{{ decisionLabel }}</dt>
          <dd>{{ project.decision }}</dd>
        </div>
        <div>
          <dt>{{ resultLabel }}</dt>
          <dd>{{ project.result }}</dd>
        </div>
      </dl>

      <ul class="tech-list" :aria-label="project.name">
        <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
      </ul>

      <a class="project__link" :href="project.repository" target="_blank" rel="noopener noreferrer">
        {{ repositoryLabel }}
        <svg aria-hidden="true" viewBox="0 0 20 20">
          <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
        </svg>
      </a>
    </div>
  </article>
</template>
