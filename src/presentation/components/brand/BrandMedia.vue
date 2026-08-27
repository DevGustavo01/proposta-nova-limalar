<template>
  <v-img
    :src="resolved"
    :alt="alt"
    :cover="cover"
    :height="height"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :width="width"
    class="brand-media"
  >
    <template #error>
      <v-img :src="fallback" :alt="alt" :cover="cover" :height="height" />
    </template>
  </v-img>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  cover: { type: Boolean, default: true },
  height: { type: [Number, String], default: undefined },
  maxHeight: { type: [Number, String], default: undefined },
  maxWidth: { type: [Number, String], default: undefined },
  width: { type: [Number, String], default: undefined },
  fallback: { type: String, default: '/media/placeholders/cover.svg' },
})

const media = inject('media')
const resolved = computed(() => media.resolve(props.src, props.fallback))
</script>
