<template>
  <section class="hero">
    <div class="hero__media">
      <BrandMedia :src="hero.background" :alt="hero.title" height="100%" class="hero-kenburns" />
      <div class="hero__overlay" />
    </div>
    <v-container class="hero__content">
      <RevealSection>
        <p class="hero__kicker mb-3">{{ hero.kicker }}</p>
        <h1 class="text-h3 text-md-h2 font-weight-bold text-white mb-5" style="max-width: 16ch">
          {{ hero.title }}
        </h1>
        <p class="text-body-1 text-white mb-8" style="max-width: 48ch; opacity: 0.9">
          {{ hero.subtitle }}
        </p>
        <div class="d-flex flex-wrap ga-3 mb-12">
          <v-btn
            v-if="hero.primaryCta?.event === 'whatsapp'"
            color="accent"
            size="large"
            class="text-none px-6"
            :href="links.whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ hero.primaryCta.label }}
          </v-btn>
          <v-btn
            v-if="hero.secondaryCta?.to"
            variant="outlined"
            color="white"
            size="large"
            class="text-none px-6"
            :to="hero.secondaryCta.to"
          >
            {{ hero.secondaryCta.label }}
          </v-btn>
        </div>
        <div v-if="stats.length" class="hero__stats d-flex flex-wrap ga-8">
          <div v-for="stat in stats" :key="stat.label">
            <p class="text-h5 font-weight-bold text-white mb-0">{{ stat.value }}</p>
            <p class="text-caption text-white mb-0" style="opacity: 0.75">{{ stat.label }}</p>
          </div>
        </div>
      </RevealSection>
    </v-container>
  </section>
</template>

<script setup>
import BrandMedia from '@/presentation/components/brand/BrandMedia.vue'
import RevealSection from '@/presentation/components/feedback/RevealSection.vue'

defineProps({
  hero: { type: Object, required: true },
  links: { type: Object, required: true },
  stats: { type: Array, default: () => [] },
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border-radius: 0 0 32px 32px;
}
.hero__media {
  position: absolute;
  inset: 0;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.15) 0%,
    rgba(15, 23, 42, 0.55) 45%,
    rgba(15, 23, 42, 0.88) 100%
  );
}
.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 120px;
  padding-bottom: 64px;
}
.hero__kicker {
  display: inline-block;
  color: rgb(var(--v-theme-accent));
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
