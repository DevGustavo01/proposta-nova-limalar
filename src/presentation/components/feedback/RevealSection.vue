<template>
  <section ref="el" class="reveal" :class="delayClass">
    <slot />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRevealOnScroll } from '@/presentation/composables/useRevealOnScroll.js'

const props = defineProps({
  delay: { type: Number, default: 0 },
})

const { el } = useRevealOnScroll()
const delayClass = computed(() => (props.delay ? `reveal-delay-${props.delay}` : ''))
</script>
