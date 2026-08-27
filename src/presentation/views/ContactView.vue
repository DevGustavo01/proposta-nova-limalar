<template>
  <div>
    <PageHero :hero="contact.hero" />
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="7">
          <ContactForm
            :fields="contact.form.fields"
            :submit-whats-app="contact.form.submitWhatsApp"
            :submit-email="contact.form.submitEmail"
            :success-message="contact.form.successMessage"
            :gateways="leadGateways"
          />
        </v-col>
        <v-col cols="12" md="5">
          <v-card
            v-for="address in contact.addresses"
            :key="address.label"
            class="mb-4 pa-4"
            border
          >
            <h3 class="text-h6 mb-2">{{ address.label }}</h3>
            <p v-for="line in address.lines" :key="line" class="mb-0 text-body-2">{{ line }}</p>
            <v-btn
              class="text-none mt-3"
              variant="text"
              color="primary"
              :href="links.mapsOpenUrl(address.query)"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no mapa
            </v-btn>
            <div class="map-frame mt-2">
              <iframe
                :src="links.mapsEmbedUrl(address.query)"
                :title="`Mapa ${address.label}`"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </v-card>
          <v-card class="pa-4" color="primary" variant="tonal">
            <p class="mb-1">
              <strong>WhatsApp:</strong>
              <a :href="links.whatsappUrl()"> {{ identity.contact.whatsapp.display }}</a>
            </p>
            <p
              v-for="phone in identity.contact.phones"
              :key="phone.e164"
              class="mb-1"
            >
              {{ phone.label }}:
              <a :href="`tel:${phone.e164}`">{{ phone.display }}</a>
            </p>
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
import ContactForm from '@/presentation/components/sections/ContactForm.vue'

const { pages, identity, links, leadGateways } = useSite()
const contact = computed(() => pages.value.contact)
</script>

<style scoped>
.map-frame {
  border-radius: 12px;
  overflow: hidden;
  height: 180px;
}
.map-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
