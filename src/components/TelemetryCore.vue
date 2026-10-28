<script setup lang="ts">
import { ref, useId } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    value?: string
    status?: string
    variant?: 'hero' | 'ambient'
  }>(),
  {
    label: '',
    value: '',
    status: '',
    variant: 'hero',
  },
)

const offsetX = ref(0)
const offsetY = ref(0)
const instanceId = useId()
const gradientId = `core-gradient-${instanceId}`
const glowId = `core-glow-${instanceId}`

function trackPointer(event: PointerEvent) {
  if (event.pointerType === 'touch') return
  const element = event.currentTarget as HTMLElement
  const rect = element.getBoundingClientRect()
  offsetX.value = ((event.clientX - rect.left) / rect.width - 0.5) * 8
  offsetY.value = ((event.clientY - rect.top) / rect.height - 0.5) * 8
}

function resetPointer() {
  offsetX.value = 0
  offsetY.value = 0
}
</script>

<template>
  <figure
    class="telemetry"
    :class="{ 'telemetry--ambient': props.variant === 'ambient' }"
    :style="props.variant === 'hero' ? { '--core-x': `${offsetX}px`, '--core-y': `${offsetY}px` } : undefined"
    :aria-hidden="props.variant === 'ambient' ? 'true' : undefined"
    v-on="props.variant === 'hero' ? { pointermove: trackPointer, pointerleave: resetPointer } : {}"
  >
    <div v-if="props.variant === 'hero'" class="telemetry__coordinates" aria-hidden="true">
      <span>27.1057°S</span>
      <span>048.5558°W</span>
    </div>

    <div class="telemetry__stage" aria-hidden="true">
      <svg class="telemetry__svg" viewBox="0 0 540 540">
        <defs>
          <linearGradient :id="gradientId" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#35e6f2" />
            <stop offset="0.55" stop-color="#0f7f91" />
            <stop offset="1" stop-color="#ffb84d" />
          </linearGradient>
          <filter :id="glowId" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle class="ring ring--outer" cx="270" cy="270" r="224" />
        <circle class="ring ring--dash" cx="270" cy="270" r="190" />
        <circle class="ring ring--slow" cx="270" cy="270" r="154" />
        <circle class="ring ring--fine" cx="270" cy="270" r="116" />
        <g class="telemetry__ticks">
          <path d="M270 27v22M270 491v22M27 270h22M491 270h22" />
          <path d="m98 98 16 16m312 312 16 16M98 442l16-16m312-312 16-16" />
        </g>
        <path class="telemetry__arc" d="M111 174a184 184 0 0 1 302-37" />
        <path class="telemetry__arc telemetry__arc--amber" d="M427 361a184 184 0 0 1-251 74" />
        <g class="telemetry__core" :style="{ stroke: `url(#${gradientId})` }">
          <polygon points="270,182 346,226 346,314 270,358 194,314 194,226" />
          <polygon class="telemetry__core-inner" points="270,211 321,241 321,299 270,329 219,299 219,241" />
          <circle cx="270" cy="270" r="24" :filter="`url(#${glowId})`" />
        </g>
        <g class="telemetry__nodes">
          <circle cx="270" cy="46" r="4" />
          <circle cx="455" cy="164" r="4" />
          <circle cx="403" cy="444" r="4" />
          <circle cx="112" cy="408" r="4" />
        </g>
      </svg>

      <template v-if="props.variant === 'hero'">
        <span class="telemetry__orbit-label telemetry__orbit-label--one">API.ARCH</span>
        <span class="telemetry__orbit-label telemetry__orbit-label--two">RAG.CORE</span>
        <span class="telemetry__orbit-label telemetry__orbit-label--three">SYS.OPS</span>

        <div class="telemetry__readout">
          <span>{{ props.label }}</span>
          <strong>{{ props.value }}</strong>
          <small><i></i>{{ props.status }}</small>
        </div>
      </template>
    </div>

    <figcaption v-if="props.variant === 'hero'">{{ props.label }} — {{ props.value }}</figcaption>
  </figure>
</template>
