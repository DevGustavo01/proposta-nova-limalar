<template>
  <v-img
    :src="src"
    :alt="alt"
    :height="Number(height)"
    :max-width="width"
    contain
    class="brand-logo"
  />
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'Logotipo' },
  height: { type: [Number, String], default: 56 },
  width: { type: [Number, String], default: 240 },
})
</script>
