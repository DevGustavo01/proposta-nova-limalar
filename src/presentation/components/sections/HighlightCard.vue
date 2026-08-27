<template>
  <v-card class="lift-card fill-height overflow-hidden" rounded="xl" border>
    <BrandMedia :src="item.image" :alt="item.title" height="200" />
    <v-card-title class="text-wrap pt-5">{{ item.title }}</v-card-title>
    <v-card-text class="text-medium-emphasis">{{ item.summary }}</v-card-text>
    <v-card-actions class="px-4 pb-4">
      <v-btn
        :to="to"
        color="primary"
        variant="text"
        class="text-none"
      >
        Saiba mais
        <v-icon end icon="mdi-arrow-right" />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import BrandMedia from '@/presentation/components/brand/BrandMedia.vue'

defineProps({
  item: { type: Object, required: true },
  to: { type: String, required: true },
})
</script>
