<template>
  <div v-if="item">
    <PageHero :hero="{ kicker: 'Serviço', title: item.title, subtitle: item.summary }" />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="5">
          <BrandMedia :src="item.image" :alt="item.title" height="360" class="detail-photo" />
        </v-col>
        <v-col cols="12" md="7">
          <p v-for="(paragraph, index) in item.body" :key="index" class="text-body-1 mb-4">
            {{ paragraph }}
          </p>
          <v-btn
            color="primary"
            class="text-none"
            :href="links.whatsappUrl(`Olá, gostaria de um orçamento de ${item.title}.`)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <NotFoundView v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSite } from '@/presentation/composables/useSite.js'
import PageHero from '@/presentation/components/sections/PageHero.vue'
import BrandMedia from '@/presentation/components/brand/BrandMedia.vue'
import NotFoundView from '@/presentation/views/NotFoundView.vue'

const route = useRoute()
const { pages, links } = useSite()
const item = computed(() =>
  pages.value.services.items.find((service) => service.slug === route.params.slug),
)
</script>
