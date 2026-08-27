import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Acesso único ao bundle JSON injetado no Composition Root.
 */
export function useSite() {
  const site = inject('site')
  const media = inject('media')
  const links = inject('links')
  const leadGateways = inject('leadGateways')
  const route = useRoute()

  const identity = computed(() => site.identity)
  const navigation = computed(() => site.navigation)
  const pages = computed(() => site.pages)

  const pageSeo = computed(() => {
    const exact = site.seo?.pages?.[route.path]
    if (exact) return exact

    if (route.name === 'service-detail') {
      const item = site.pages.services.items.find((service) => service.slug === route.params.slug)
      if (item) {
        return {
          title: `${item.title} | ${identity.value.brandName}`,
          description: item.summary,
        }
      }
    }

    if (route.name === 'pest-detail') {
      const item = site.pages.pests.items.find((pest) => pest.slug === route.params.slug)
      if (item) {
        return {
          title: `${item.name} | ${identity.value.brandName}`,
          description: item.summary,
        }
      }
    }

    return {
      title: site.seo?.defaultTitle || identity.value.brandName,
      description: site.seo?.defaultDescription || '',
    }
  })

  return {
    site,
    media,
    links,
    leadGateways,
    identity,
    navigation,
    pages,
    pageSeo,
  }
}
