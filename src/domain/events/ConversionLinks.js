/**
 * Monta URLs de conversão (WhatsApp, telefone, e-mail, mapa).
 * SRP: regras de URL ficam fora dos componentes Vue.
 */
export class ConversionLinks {
  /**
   * @param {object} contact
   */
  constructor(contact = {}) {
    this.contact = {
      whatsapp: { e164: '', defaultMessage: '' },
      phones: [],
      emails: [],
      ...contact,
      whatsapp: { e164: '', defaultMessage: '', ...contact.whatsapp },
    }
  }

  whatsappUrl(customMessage) {
    const phone = this.contact.whatsapp.e164 || ''
    const message = encodeURIComponent(
      customMessage || this.contact.whatsapp.defaultMessage || '',
    )
    return `https://wa.me/${phone}?text=${message}`
  }

  telUrl() {
    return `tel:${this.contact.phones[0]?.e164 || ''}`
  }

  mailtoUrl(subject = 'Orçamento') {
    const email = this.contact.emails.find((item) => item.primary)?.address
      || this.contact.emails[0]?.address
      || ''
    return `mailto:${email}?subject=${encodeURIComponent(subject)}`
  }

  mapsEmbedUrl(addressLine) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(addressLine)}&output=embed`
  }

  mapsOpenUrl(addressLine) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine)}`
  }
}
