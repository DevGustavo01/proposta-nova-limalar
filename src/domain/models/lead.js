/**
 * Valida o lead no domínio — a view só coleta dados.
 */
export function validateLead(lead) {
  const errors = {}

  if (!lead.name?.trim() || lead.name.trim().length < 2) {
    errors.name = 'Informe seu nome.'
  }

  if (!isValidEmail(lead.email)) {
    errors.email = 'Informe um e-mail válido.'
  }

  if (!lead.message?.trim() || lead.message.trim().length < 10) {
    errors.message = 'Descreva o serviço com pelo menos 10 caracteres.'
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
}

/**
 * @typedef {object} Lead
 * @property {string} name
 * @property {string} email
 * @property {string} [subject]
 * @property {string} message
 * @property {string} [phone]
 */
