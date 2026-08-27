<template>
  <v-btn
    class="whatsapp-pulse"
    color="#25D366"
    icon
    size="x-large"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Abrir WhatsApp"
    style="position: fixed; bottom: 24px; right: 24px; z-index: 20"
  >
    <v-icon icon="mdi-whatsapp" size="32" color="white" />
  </v-btn>
</template>

<script setup>
defineProps({
  href: { type: String, required: true },
})
</script>
