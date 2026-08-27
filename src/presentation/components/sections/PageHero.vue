<template>
  <section class="page-hero">
    <v-container>
      <RevealSection>
        <p class="text-primary text-caption text-uppercase font-weight-bold mb-3" style="letter-spacing: 0.14em">
          {{ hero.kicker }}
        </p>
        <h1 class="text-h3 font-weight-bold mb-4" style="max-width: 18ch">{{ hero.title }}</h1>
        <p class="text-body-1 text-medium-emphasis" style="max-width: 58ch">
          {{ hero.subtitle }}
        </p>
      </RevealSection>
    </v-container>
  </section>
</template>

<script setup>
import RevealSection from '@/presentation/components/feedback/RevealSection.vue'

defineProps({
  hero: { type: Object, required: true },
})
</script>

<style scoped>
.page-hero {
  padding: 72px 0 40px;
  background:
    radial-gradient(1200px 280px at 10% 0%, rgba(15, 118, 110, 0.1), transparent 60%),
    rgb(var(--v-theme-surface));
}
</style>
