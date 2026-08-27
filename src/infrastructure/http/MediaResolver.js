/**
 * Resolve caminhos de mídia declarados no JSON.
 * Caminhos relativos viram URL pública; URLs absolutas passam direto.
 */
export class MediaResolver {
  /**
   * @param {string} publicRoot
   */
  constructor(publicRoot = '') {
    this.publicRoot = publicRoot.replace(/\/$/, '')
  }

  /**
   * @param {string | undefined | null} path
   * @param {string} [fallback]
   */
  resolve(path, fallback = '/media/placeholders/cover.svg') {
    if (!path) return fallback
    if (/^https?:\/\//i.test(path)) return path
    if (path.startsWith('/')) return `${this.publicRoot}${path}`
    return `${this.publicRoot}/${path}`
  }
}
