/**
 * Contrato para envio de leads do formulário institucional.
 *
 * ISP: só o que o formulário precisa — submeter e receber um resultado.
 * OCP: novos canais (API, CRM) entram como novas classes, sem alterar a view.
 */
export class LeadGateway {
  /**
   * @param {import('../models/lead.js').Lead} lead
   * @returns {Promise<{ ok: boolean, channel: string }>}
   */
  async submit(lead) {
    throw new Error('LeadGateway.submit deve ser implementado')
  }
}
