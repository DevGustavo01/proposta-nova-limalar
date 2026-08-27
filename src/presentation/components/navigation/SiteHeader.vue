<template>
  <header>
    <v-app-bar
      :elevation="compact ? 4 : 0"
      :height="compact ? 68 : 80"
      class="site-header"
      color="background"
    >
      <v-container class="d-flex align-center py-0 px-4 px-md-8">
        <router-link to="/" class="d-flex align-center text-decoration-none mr-4">
          <BrandLogo
            :src="identity.logo.header"
            :alt="identity.logo.alt"
            :height="compact ? 40 : 48"
          />
        </router-link>

        <v-spacer />

        <nav class="d-none d-md-flex align-center ga-1" aria-label="Principal">
          <v-btn
            v-for="item in navigation.items"
            :key="item.to"
            :to="item.to"
            :exact="item.to === '/'"
            variant="text"
            color="on-surface"
            class="text-none font-weight-medium"
          >
            {{ item.label }}
          </v-btn>
          <v-btn
            color="primary"
            class="text-none ml-3"
            :href="links.whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ navigation.cta.label }}
          </v-btn>
        </nav>

        <v-btn
          class="d-md-none"
          icon="mdi-menu"
          variant="text"
          color="on-surface"
          aria-label="Abrir menu"
          @click="drawer = true"
        />
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <div class="pa-4">
        <BrandLogo :src="identity.logo.header" :alt="identity.logo.alt" height="44" />
      </div>
      <v-list nav>
        <v-list-item
          v-for="item in navigation.items"
          :key="item.to"
          :to="item.to"
          :exact="item.to === '/'"
          :title="item.label"
          :prepend-icon="item.icon"
          @click="drawer = false"
        />
      </v-list>
      <div class="pa-4">
        <v-btn
          block
          color="primary"
          class="text-none"
          :href="links.whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ navigation.cta.label }}
        </v-btn>
      </div>
    </v-navigation-drawer>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BrandLogo from '@/presentation/components/brand/BrandLogo.vue'

defineProps({
  identity: { type: Object, required: true },
  navigation: { type: Object, required: true },
  links: { type: Object, required: true },
})

const drawer = ref(false)
const compact = ref(false)

function onScroll() {
  compact.value = window.scrollY > 16
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.site-header {
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
  transition: height 0.25s ease, box-shadow 0.25s ease;
}
</style>
