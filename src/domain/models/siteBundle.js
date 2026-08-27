/**
 * @typedef {object} SiteBundle
 * @property {object} identity
 * @property {object} navigation
 * @property {object} seo
 * @property {{ home: object, about: object, services: object, pests: object, clients: object, contact: object }} pages
 */

export function createEmptyBundle() {
  return {
    identity: {
      brandName: 'Institucional',
      tagline: '',
      logo: { header: '', footer: '', favicon: '', alt: '' },
      theme: { colors: {} },
      contact: {
        whatsapp: { e164: '', display: '', defaultMessage: '' },
        phones: [],
        emails: [],
      },
      legal: { copyright: '' },
    },
    navigation: { items: [], cta: { label: 'Contato', event: 'whatsapp' } },
    seo: { defaultTitle: 'Institucional' },
    pages: {
      home: {
        hero: { kicker: '', title: '', subtitle: '', background: '', primaryCta: {}, secondaryCta: {} },
        stats: [],
        trustBar: { title: '', items: [] },
        storyPreview: { eyebrow: '', title: '', image: '', paragraphs: [], cta: { label: '', to: '/' } },
        highlights: { title: '', subtitle: '', items: [] },
        clientsPreview: { title: '', cta: { label: '', to: '/' } },
        finalCta: { title: '', subtitle: '', primary: {}, secondary: { to: '/contato' } },
      },
      about: { hero: { kicker: '', title: '', subtitle: '' }, image: '', paragraphs: [], certifications: [], values: [] },
      services: { hero: { kicker: '', title: '', subtitle: '' }, intro: [], items: [] },
      pests: { hero: { kicker: '', title: '', subtitle: '' }, items: [] },
      clients: { hero: { kicker: '', title: '', subtitle: '' }, intro: '', items: [] },
      contact: {
        hero: { kicker: '', title: '', subtitle: '' },
        form: { fields: {}, submitWhatsApp: '', submitEmail: '', successMessage: '' },
        addresses: [],
      },
    },
  }
}
