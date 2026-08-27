import { LeadGateway } from '@/domain/contracts/LeadGateway.js'

/**
 * Canal de conversão principal do site atual: WhatsApp.
 */
export class WhatsAppLeadGateway extends LeadGateway {
  /**
   * @param {(message: string) => string} buildUrl
   */
  constructor(buildUrl) {
    super()
    this.buildUrl = buildUrl
  }

  async submit(lead) {
    const text = [
      'Olá, gostaria de agendar um orçamento.',
      `Nome: ${lead.name}`,
      `E-mail: ${lead.email}`,
      lead.phone ? `Telefone: ${lead.phone}` : null,
      lead.subject ? `Assunto: ${lead.subject}` : null,
      '',
      lead.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(this.buildUrl(text), '_blank', 'noopener,noreferrer')
    return { ok: true, channel: 'whatsapp' }
  }
}
