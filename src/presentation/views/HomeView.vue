<template>
  <div>
    <HeroBanner :hero="home.hero" :links="links" :stats="home.stats || []" />

    <v-container class="py-10">
      <p class="text-center text-medium-emphasis text-subtitle-2 mb-6">{{ home.trustBar.title }}</p>
      <div class="d-flex flex-wrap justify-center ga-3">
        <v-chip
          v-for="item in home.trustBar.items"
          :key="item.label"
          variant="tonal"
          color="primary"
          class="px-4"
          size="large"
        >
          <v-icon start :icon="item.icon" />
          {{ item.label }}
        </v-chip>
      </div>
    </v-container>

    <v-container class="py-12 py-md-16">
      <v-row align="center">
        <v-col cols="12" md="6">
          <RevealSection>
            <p class="text-primary text-caption text-uppercase mb-2" style="letter-spacing: 0.12em">
              {{ home.storyPreview.eyebrow }}
            </p>
            <h2 class="text-h4 font-weight-bold mb-4" style="max-width: 18ch">
              {{ home.storyPreview.title }}
            </h2>
            <p
              v-for="(paragraph, index) in home.storyPreview.paragraphs"
              :key="index"
              class="text-body-1 text-medium-emphasis mb-3"
            >
              {{ paragraph }}
            </p>
            <v-btn :to="home.storyPreview.cta.to" color="primary" class="text-none mt-4">
              {{ home.storyPreview.cta.label }}
            </v-btn>
          </RevealSection>
        </v-col>
        <v-col cols="12" md="6">
          <RevealSection :delay="2">
            <v-img
              class="story-photo"
              :src="media.resolve(home.storyPreview.image)"
              :alt="home.storyPreview.title"
              height="380"
              cover
            />
          </RevealSection>
        </v-col>
      </v-row>
    </v-container>

    <section class="bg-surface py-12 py-md-16">
      <v-container>
        <RevealSection>
          <h2 class="text-h4 font-weight-bold mb-2">{{ home.highlights.title }}</h2>
          <p class="text-medium-emphasis mb-8">{{ home.highlights.subtitle }}</p>
        </RevealSection>
        <v-row>
          <v-col
            v-for="(item, index) in home.highlights.items"
            :key="item.slug"
            cols="12"
            md="4"
          >
            <RevealSection :delay="(index % 3) + 1">
              <HighlightCard :item="item" :to="`/servicos/${item.slug}`" />
            </RevealSection>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-container class="py-12 py-md-16">
      <div class="d-flex align-center justify-space-between mb-8">
        <h2 class="text-h4 font-weight-bold">{{ home.clientsPreview.title }}</h2>
        <v-btn :to="home.clientsPreview.cta.to" variant="text" color="primary" class="text-none">
          {{ home.clientsPreview.cta.label }}
        </v-btn>
      </div>
      <v-row>
        <v-col
          v-for="client in featuredClients"
          :key="client.name"
          cols="6"
          sm="4"
          md="2"
        >
          <v-card class="pa-4 d-flex align-center justify-center" height="120" border rounded="xl">
            <BrandMedia
              v-if="client.logo"
              :src="client.logo"
              :alt="client.name"
              height="72"
              :cover="false"
            />
            <span v-else class="text-caption text-center">{{ client.name }}</span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="pb-16">
      <v-sheet class="cta-panel pa-10 text-center" color="secondary" rounded="xl">
        <h2 class="text-h4 font-weight-bold text-white mb-3">{{ home.finalCta.title }}</h2>
        <p class="text-white mb-8" style="opacity: 0.8">{{ home.finalCta.subtitle }}</p>
        <v-btn
          color="accent"
          size="large"
          class="text-none mr-3"
          :href="links.whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ home.finalCta.primary.label }}
        </v-btn>
        <v-btn
          variant="outlined"
          color="white"
          size="large"
          class="text-none"
          :to="home.finalCta.secondary.to"
        >
          {{ home.finalCta.secondary.label }}
        </v-btn>
      </v-sheet>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSite } from '@/presentation/composables/useSite.js'
import HeroBanner from '@/presentation/components/sections/HeroBanner.vue'
import HighlightCard from '@/presentation/components/sections/HighlightCard.vue'
import RevealSection from '@/presentation/components/feedback/RevealSection.vue'
import BrandMedia from '@/presentation/components/brand/BrandMedia.vue'

const { pages, media, links } = useSite()
const home = computed(() => pages.value.home)
const featuredClients = computed(() =>
  pages.value.clients.items.filter((item) => item.logo).slice(0, 6),
)
</script>

<style scoped>
.story-photo {
  border-radius: 24px;
}
.cta-panel {
  overflow: hidden;
}
</style>
