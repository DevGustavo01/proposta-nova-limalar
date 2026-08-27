import { createApp } from 'vue'
import App from '@/app/App.vue'
import { createAppRouter } from '@/app/router/index.js'
import { createVuetifyPlugin } from '@/app/plugins/vuetify.js'
import { JsonContentRepository, safeBundle } from '@/infrastructure/repositories/JsonContentRepository.js'
import { MediaResolver } from '@/infrastructure/http/MediaResolver.js'
import { ConversionLinks } from '@/domain/events/ConversionLinks.js'
import { MailtoLeadGateway } from '@/infrastructure/gateways/MailtoLeadGateway.js'
import { WhatsAppLeadGateway } from '@/infrastructure/gateways/WhatsAppLeadGateway.js'
import '@/presentation/styles/institutional.css'

/**
 * Ponto único de composição (Composition Root).
 * Liga contratos de domínio às implementações de infraestrutura.
 */
async function start() {
  const repository = new JsonContentRepository('/data/manifest.json')
  let site

  try {
    site = await repository.load()
  } catch (error) {
    console.error(error)
    site = safeBundle(error)
  }

  const media = new MediaResolver()
  const links = new ConversionLinks(site.identity.contact || { whatsapp: { e164: '' }, phones: [], emails: [] })
  const commercialEmail =
    site.identity.contact?.emails?.find((item) => item.primary)?.address
    || site.identity.contact?.emails?.[0]?.address
    || ''

  const app = createApp(App)
  app.provide('site', site)
  app.provide('media', media)
  app.provide('links', links)
  app.provide('leadGateways', {
    email: new MailtoLeadGateway(commercialEmail),
    whatsapp: new WhatsAppLeadGateway((message) => links.whatsappUrl(message)),
  })

  app.use(createVuetifyPlugin(site.identity.theme))
  app.use(createAppRouter())
  app.mount('#app')
}

start()
