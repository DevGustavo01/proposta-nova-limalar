import { watch } from 'vue'

/**
 * Atualiza title e meta description a cada rota, a partir do seo.json.
 */
export function useDocumentMeta(pageSeo) {
  watch(
    pageSeo,
    (seo) => {
      if (!seo) return
      document.title = seo.title

      upsertMeta('description', seo.description)
      upsertMeta('og:title', seo.title, 'property')
      upsertMeta('og:description', seo.description, 'property')
    },
    { immediate: true },
  )
}

function upsertMeta(name, content, attr = 'name') {
  if (!content) return
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}
