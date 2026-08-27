import { LeadGateway } from '@/domain/contracts/LeadGateway.js'

/**
 * Canal padrão sem backend: abre o cliente de e-mail do usuário.
 * Substitua por ApiLeadGateway quando houver endpoint.
 */
export class MailtoLeadGateway extends LeadGateway {
  /**
   * @param {string} destinationEmail
   */
  constructor(destinationEmail) {
    super()
    this.destinationEmail = destinationEmail
  }

  async submit(lead) {
    const subject = encodeURIComponent(lead.subject || 'Solicitação de orçamento')
    const body = encodeURIComponent(
      [
        `Nome: ${lead.name}`,
        `E-mail: ${lead.email}`,
        lead.phone ? `Telefone: ${lead.phone}` : null,
        '',
        lead.message,
      ]
        .filter(Boolean)
        .join('\n'),
    )

    window.location.href = `mailto:${this.destinationEmail}?subject=${subject}&body=${body}`
    return { ok: true, channel: 'mailto' }
  }
}
