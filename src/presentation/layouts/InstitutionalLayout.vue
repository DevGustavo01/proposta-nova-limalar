<template>
  <div>
    <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
    <SiteHeader :identity="identity" :navigation="navigation" :links="links" />
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" id="conteudo" />
        </transition>
      </router-view>
    </v-main>
    <SiteFooter :identity="identity" :navigation="navigation" :links="links" />
    <WhatsAppFab :href="links.whatsappUrl()" />
  </div>
</template>

<script setup>
import SiteHeader from '@/presentation/components/navigation/SiteHeader.vue'
import SiteFooter from '@/presentation/components/navigation/SiteFooter.vue'
import WhatsAppFab from '@/presentation/components/navigation/WhatsAppFab.vue'
import { useSite } from '@/presentation/composables/useSite.js'
import { useBrandTheme } from '@/presentation/composables/useBrandTheme.js'
import { useDocumentMeta } from '@/presentation/composables/useDocumentMeta.js'

const { identity, navigation, links, pageSeo } = useSite()
useBrandTheme(identity)
useDocumentMeta(pageSeo)
</script>
