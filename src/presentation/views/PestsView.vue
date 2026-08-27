<template>
  <div>
    <PageHero :hero="pests.hero" />
    <v-container class="py-12">
      <v-row>
        <v-col v-for="item in pests.items" :key="item.slug" cols="12" sm="6" md="4">
          <v-card class="lift-card fill-height" :to="`/temas/${item.slug}`" border rounded="xl">
            <v-card-item>
              <template #prepend>
                <v-avatar color="primary" variant="tonal">
                  <v-icon :icon="item.icon" />
                </v-avatar>
              </template>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-subtitle class="text-wrap">{{ item.summary }}</v-card-subtitle>
            </v-card-item>
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

const { pages } = useSite()
const pests = computed(() => pages.value.pests)
</script>
