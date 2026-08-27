import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { pt } from 'vuetify/locale'

/**
 * Vuetify inicia com tokens genéricos.
 * A identidade visual do JSON é aplicada em tempo de execução (useBrandTheme).
 */
export function createVuetifyPlugin(themeFromJson = {}) {
  const colors = themeFromJson.colors || {}

  return createVuetify({
    locale: {
      locale: 'pt',
      messages: { pt },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: 'brand',
      themes: {
        brand: {
          dark: false,
          colors: {
            primary: colors.primary || '#0F766E',
            secondary: colors.secondary || '#0F172A',
            accent: colors.accent || '#2DD4BF',
            header: colors.header || '#FFFFFF',
            surface: colors.surface || '#F8FAFC',
            background: colors.background || '#FFFFFF',
            error: colors.error || '#B3261E',
            info: colors.info || '#0F766E',
            success: colors.success || '#0F766E',
            warning: colors.warning || '#C47B17',
            'on-primary': colors['on-primary'] || '#FFFFFF',
            'on-secondary': colors['on-secondary'] || '#FFFFFF',
            'on-surface': colors['on-surface'] || '#0F172A',
          },
        },
      },
    },
    defaults: {
      VBtn: { rounded: 'lg', elevation: 0 },
      VCard: { rounded: 'xl', elevation: 0 },
      VTextField: { variant: 'outlined', density: 'comfortable' },
      VTextarea: { variant: 'outlined' },
    },
  })
}
