<template>
  <div v-if="item">
    <PageHero :hero="{ kicker: 'Tema', title: item.name, subtitle: item.summary }" />
    <v-container class="py-12">
      <p
        v-for="(paragraph, index) in item.intro"
        :key="index"
        class="text-body-1 text-medium-emphasis mb-4"
        style="max-width: 70ch"
      >
        {{ paragraph }}
      </p>
      <v-row v-if="item.species?.length" class="mt-4">
        <v-col v-for="species in item.species" :key="species.name" cols="12" md="6">
          <v-card class="pa-6 fill-height" border rounded="xl">
            <h3 class="text-h6">{{ species.name }}</h3>
            <p v-if="species.scientificName" class="text-caption font-italic mb-3">
              {{ species.scientificName }}
            </p>
            <ul class="text-body-2">
              <li v-for="fact in species.facts" :key="fact">{{ fact }}</li>
            </ul>
          </v-card>
        </v-col>
      </v-row>
      <v-btn class="text-none mt-8" color="primary" to="/contato">Falar com a equipe</v-btn>
    </v-container>
  </div>
  <NotFoundView v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSite } from '@/presentation/composables/useSite.js'
import PageHero from '@/presentation/components/sections/PageHero.vue'
import NotFoundView from '@/presentation/views/NotFoundView.vue'

const route = useRoute()
const { pages } = useSite()
const item = computed(() =>
  pages.value.pests.items.find((pest) => pest.slug === route.params.slug),
)
</script>
