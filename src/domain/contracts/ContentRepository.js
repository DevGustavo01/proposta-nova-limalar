/**
 * Contrato do repositório de conteúdo.
 *
 * DIP: a UI depende desta interface, não do JSON nem do fetch.
 * Trocar JSON local por CMS/API exige apenas uma nova implementação.
 */
export class ContentRepository {
  /**
   * @returns {Promise<import('../models/siteBundle.js').SiteBundle>}
   */
  async load() {
    throw new Error('ContentRepository.load deve ser implementado')
  }
}
