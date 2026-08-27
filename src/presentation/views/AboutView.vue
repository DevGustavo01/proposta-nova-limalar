<template>
  <div>
    <PageHero :hero="about.hero" />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <v-img
            class="about-photo"
            :src="media.resolve(about.image)"
            :alt="about.hero.title"
            height="420"
            cover
          />
        </v-col>
        <v-col cols="12" md="6">
          <RevealSection>
            <p
              v-for="(paragraph, index) in about.paragraphs"
              :key="index"
              class="text-body-1 text-medium-emphasis mb-4"
            >
              {{ paragraph }}
            </p>
          </RevealSection>
          <v-row class="mt-2">
            <v-col v-for="value in about.values" :key="value.title" cols="12">
              <v-card class="pa-5" variant="tonal" color="primary" rounded="xl">
                <div class="d-flex ga-4">
                  <v-icon :icon="value.icon" size="28" />
                  <div>
                    <h3 class="text-subtitle-1 font-weight-bold">{{ value.title }}</h3>
                    <p class="mb-0 text-body-2">{{ value.text }}</p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <h2 class="text-h5 font-weight-bold mt-16 mb-6">Selos demonstrativos</h2>
      <v-row>
        <v-col v-for="cert in about.certifications" :key="cert.name" cols="6" md="3">
          <v-card class="pa-6 text-center fill-height" border rounded="xl">
            <BrandMedia
              v-if="cert.image"
              :src="cert.image"
              :alt="cert.name"
              height="72"
              :cover="false"
            />
            <v-icon v-else icon="mdi-certificate-outline" size="40" color="primary" />
            <h3 class="text-subtitle-1 mt-3">{{ cert.name }}</h3>
            <p class="text-caption text-medium-emphasis mb-0">{{ cert.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSite } from '@/presentation/composables/useSite.js'
import PageHero from '@/presentation/components/sections/PageHero.vue'
import RevealSection from '@/presentation/components/feedback/RevealSection.vue'
import BrandMedia from '@/presentation/components/brand/BrandMedia.vue'

const { pages, media } = useSite()
const about = computed(() => pages.value.about)
</script>

<style scoped>
.about-photo {
  border-radius: 24px;
}
</style>
