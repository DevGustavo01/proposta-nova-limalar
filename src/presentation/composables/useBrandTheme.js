import { watch } from 'vue'
import { useTheme } from 'vuetify'

/**
 * Empurra as cores do identity.json para o tema Vuetify e para CSS variables.
 * Trocar o JSON de identidade altera a UI sem recompilar componentes.
 */
export function useBrandTheme(identity) {
  const theme = useTheme()

  watch(
    identity,
    (value) => {
      const colors = value?.theme?.colors || {}
      Object.entries(colors).forEach(([key, hex]) => {
        theme.themes.value.brand.colors[key] = hex
      })

      const root = document.documentElement
      root.style.setProperty('--brand-heading', value?.theme?.fonts?.heading || 'system-ui, sans-serif')
      root.style.setProperty('--brand-body', value?.theme?.fonts?.body || 'system-ui, sans-serif')
      root.style.setProperty('--brand-radius', value?.theme?.radius || '16px')
      root.style.setProperty('--brand-primary', colors.primary || '#0F766E')
      root.style.setProperty('--brand-secondary', colors.secondary || '#0F172A')
      root.style.setProperty('--brand-accent', colors.accent || '#2DD4BF')
    },
    { immediate: true, deep: true },
  )
}
