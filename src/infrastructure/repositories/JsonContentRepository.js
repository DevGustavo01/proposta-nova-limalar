import { ContentRepository } from '@/domain/contracts/ContentRepository.js'
import { createEmptyBundle } from '@/domain/models/siteBundle.js'

/**
 * Carrega o site a partir de JSON estático em /public/data.
 *
 * Integração: substitua os arquivos JSON ou aponte o manifest para outro host.
 * A camada de apresentação não muda.
 */
export class JsonContentRepository extends ContentRepository {
  /**
   * @param {string} manifestUrl
   * @param {typeof fetch} [fetchFn]
   */
  constructor(manifestUrl = '/data/manifest.json', fetchFn) {
    super()
    this.manifestUrl = manifestUrl
    // bind evita "Illegal invocation" ao passar window.fetch como referência.
    this.fetchFn = fetchFn || ((input, init) => globalThis.fetch(input, init))
  }

  async load() {
    const manifest = await this.readJson(this.manifestUrl)
    const base = this.basePath(this.manifestUrl)

    const [identity, navigation, seo, home, about, services, pests, clients, contact] =
      await Promise.all([
        this.readJson(this.join(base, manifest.identity)),
        this.readJson(this.join(base, manifest.navigation)),
        this.readJson(this.join(base, manifest.seo)),
        this.readJson(this.join(base, manifest.pages.home)),
        this.readJson(this.join(base, manifest.pages.about)),
        this.readJson(this.join(base, manifest.pages.services)),
        this.readJson(this.join(base, manifest.pages.pests)),
        this.readJson(this.join(base, manifest.pages.clients)),
        this.readJson(this.join(base, manifest.pages.contact)),
      ])

    return {
      identity,
      navigation,
      seo,
      pages: { home, about, services, pests, clients, contact },
    }
  }

  async readJson(url) {
    const response = await this.fetchFn(url, { cache: 'no-store' })
    if (!response.ok) {
      throw new Error(`Falha ao ler JSON: ${url} (${response.status})`)
    }
    return response.json()
  }

  basePath(url) {
    return url.replace(/\/[^/]+$/, '/')
  }

  join(base, relative) {
    if (/^https?:\/\//i.test(relative) || relative.startsWith('/')) {
      return relative
    }
    return `${base}${relative}`
  }
}

export function safeBundle(error) {
  const bundle = createEmptyBundle()
  bundle.identity.brandName = 'Conteúdo indisponível'
  bundle.loadError = error.message
  return bundle
}
