<template>
  <div>
    <PageHero :hero="services.hero" />
    <v-container class="py-12">
      <p
        v-for="(paragraph, index) in services.intro"
        :key="index"
        class="text-body-1 text-medium-emphasis mb-3"
        style="max-width: 70ch"
      >
        {{ paragraph }}
      </p>
      <v-row class="mt-8">
        <v-col v-for="item in services.items" :key="item.slug" cols="12" md="4">
          <RevealSection>
            <v-card class="lift-card fill-height overflow-hidden" rounded="xl" border>
              <BrandMedia :src="item.image" :alt="item.title" height="180" />
              <v-card-item class="pt-5">
                <template #prepend>
                  <v-icon :icon="item.icon" color="primary" size="28" />
                </template>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle class="text-wrap">{{ item.summary }}</v-card-subtitle>
              </v-card-item>
              <v-card-actions class="px-4 pb-4">
                <v-btn :to="`/servicos/${item.slug}`" color="primary" class="text-none" variant="text">
                  Saiba mais
                </v-btn>
              </v-card-actions>
            </v-card>
          </RevealSection>
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

const { pages } = useSite()
const services = computed(() => pages.value.services)
</script>
