<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import type { Project, ProjectDetailLabels } from '../content/schema'

const props = defineProps<{
  project: Project | null
  labels: ProjectDetailLabels
  repositoryLabel: string
}>()

const emit = defineEmits<{
  close: []
}>()

const dialog = ref<HTMLDialogElement>()
const titleId = computed(() => (props.project ? `project-modal-${props.project.id}-title` : undefined))
const descriptionId = computed(() =>
  props.project ? `project-modal-${props.project.id}-description` : undefined,
)

async function open() {
  await nextTick()
  if (props.project && dialog.value && !dialog.value.open) {
    dialog.value.showModal()
    document.documentElement.classList.add('has-open-dialog')
  }
}

function close() {
  dialog.value?.close()
}

function handleClosed() {
  document.documentElement.classList.remove('has-open-dialog')
  emit('close')
}

function closeOnBackdrop(event: MouseEvent) {
  if (event.target === dialog.value) close()
}

watch(
  () => props.project,
  (project) => {
    if (project) void open()
    else if (dialog.value?.open) close()
  },
)

onBeforeUnmount(() => {
  document.documentElement.classList.remove('has-open-dialog')
  if (dialog.value?.open) dialog.value.close()
})
</script>

<template>
  <dialog
    ref="dialog"
    class="project-modal"
    :class="project ? `project-modal--${project.accent}` : undefined"
    :aria-labelledby="titleId"
    :aria-describedby="descriptionId"
    @click="closeOnBackdrop"
    @close="handleClosed"
  >
    <article v-if="project" class="project-modal__frame">
      <header class="project-modal__header">
        <div class="project-modal__statusline" aria-hidden="true">
          <span>{{ project.index }} // {{ labels.caseStudy }}</span>
          <i></i>
          <span>DETAIL.NODE // OPEN</span>
        </div>

        <button class="project-modal__close" type="button" :aria-label="labels.close" @click="close">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div class="project-modal__intro">
          <div>
            <p class="project-modal__eyebrow">{{ project.eyebrow }}</p>
            <h2 :id="titleId">{{ project.name }}</h2>
            <p :id="descriptionId" class="project-modal__summary">{{ project.summary }}</p>
          </div>

          <dl class="project-modal__facts">
            <div>
              <dt>{{ labels.status }}</dt>
              <dd>{{ project.details.status }}</dd>
            </div>
            <div>
              <dt>{{ labels.period }}</dt>
              <dd>{{ project.details.period }}</dd>
            </div>
            <div>
              <dt>{{ labels.role }}</dt>
              <dd>{{ project.details.role }}</dd>
            </div>
          </dl>
        </div>

        <figure class="project-modal__visual">
          <img :src="project.image" :alt="project.imageAlt" width="1200" height="760" />
          <figcaption>{{ project.index }} / {{ project.name }}</figcaption>
        </figure>
      </header>

      <div class="project-modal__body">
        <section class="project-modal__section project-modal__section--overview">
          <p class="project-modal__section-code">01</p>
          <div>
            <h3>{{ labels.overview }}</h3>
            <p v-for="paragraph in project.details.overview" :key="paragraph">{{ paragraph }}</p>
          </div>
        </section>

        <section class="project-modal__section">
          <p class="project-modal__section-code">02</p>
          <div>
            <h3>{{ labels.features }}</h3>
            <ul class="project-modal__numbered-list">
              <li v-for="(feature, index) in project.details.features" :key="feature">
                <span>{{ String(index + 1).padStart(2, '0') }}</span>
                <p>{{ feature }}</p>
              </li>
            </ul>
          </div>
        </section>

        <section class="project-modal__section">
          <p class="project-modal__section-code">03</p>
          <div>
            <h3>{{ labels.architecture }}</h3>
            <ul class="project-modal__architecture">
              <li v-for="item in project.details.architecture" :key="item">{{ item }}</li>
            </ul>
          </div>
        </section>

        <section class="project-modal__section project-modal__section--split">
          <p class="project-modal__section-code">04</p>
          <div class="project-modal__split-grid">
            <div>
              <h3>{{ labels.tradeoffs }}</h3>
              <ul>
                <li v-for="item in project.details.tradeoffs" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div>
              <h3>{{ labels.outcomes }}</h3>
              <ul>
                <li v-for="item in project.details.outcomes" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="project-modal__section project-modal__section--footer">
          <p class="project-modal__section-code">05</p>
          <div>
            <h3>{{ labels.nextSteps }}</h3>
            <ul>
              <li v-for="item in project.details.nextSteps" :key="item">{{ item }}</li>
            </ul>
          </div>
          <aside>
            <p>{{ labels.technologies }}</p>
            <ul class="tech-list">
              <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
            </ul>
            <a :href="project.repository" target="_blank" rel="noopener noreferrer">
              {{ repositoryLabel }} <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>
      </div>
    </article>
  </dialog>
</template>
