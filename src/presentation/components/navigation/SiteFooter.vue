<template>
  <v-footer color="secondary" class="site-footer pa-0">
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="5" class="mb-6 mb-md-0">
          <BrandLogo
            :src="identity.logo.footer"
            :alt="identity.logo.alt"
            height="48"
            class="mb-4"
          />
          <p class="text-white text-body-2 mb-0" style="max-width: 36ch; opacity: 0.78">
            {{ identity.tagline }}
          </p>
        </v-col>

        <v-col cols="6" md="3">
          <h3 class="text-subtitle-2 text-uppercase mb-4" style="letter-spacing: 0.08em; opacity: 0.7">
            Navegação
          </h3>
          <div class="d-flex flex-column ga-2">
            <router-link
              v-for="item in navigation.items"
              :key="item.to"
              :to="item.to"
              class="text-white text-decoration-none text-body-2"
            >
              {{ item.label }}
            </router-link>
          </div>
        </v-col>

        <v-col cols="6" md="4">
          <h3 class="text-subtitle-2 text-uppercase mb-4" style="letter-spacing: 0.08em; opacity: 0.7">
            Contato
          </h3>
          <p class="mb-2 text-body-2">
            <a class="text-white" :href="links.telUrl()">{{ identity.contact.whatsapp.display }}</a>
          </p>
          <p
            v-for="email in identity.contact.emails"
            :key="email.address"
            class="mb-1 text-body-2"
          >
            <a class="text-white" :href="`mailto:${email.address}`">{{ email.address }}</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div class="w-100 py-4 text-center text-caption text-white" style="background: rgba(0,0,0,0.22); opacity: 0.9">
      {{ identity.legal.copyright }}
    </div>
  </v-footer>
</template>

<script setup>
import BrandLogo from '@/presentation/components/brand/BrandLogo.vue'

defineProps({
  identity: { type: Object, required: true },
  navigation: { type: Object, required: true },
  links: { type: Object, required: true },
})
</script>
