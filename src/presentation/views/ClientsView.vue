<template>
  <div>
    <PageHero :hero="clients.hero" />
    <v-container class="py-12">
      <p class="text-body-1 mb-8">{{ clients.intro }}</p>
      <v-row>
        <v-col v-for="item in clients.items" :key="item.name" cols="6" sm="4" md="3">
          <v-card class="pa-6 fill-height d-flex flex-column align-center justify-center text-center" border rounded="xl">
            <BrandMedia
              v-if="item.logo"
              :src="item.logo"
              :alt="item.name"
              height="72"
              :cover="false"
            />
            <v-avatar v-else color="primary" variant="tonal" class="mb-2">
              {{ initials(item.name) }}
            </v-avatar>
            <p class="text-caption mt-3 mb-0">{{ item.name }}</p>
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
import BrandMedia from '@/presentation/components/brand/BrandMedia.vue'

const { pages } = useSite()
const clients = computed(() => pages.value.clients)

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
</script>
