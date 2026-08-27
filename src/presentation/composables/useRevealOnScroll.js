import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Aplica a classe is-visible quando o elemento entra na viewport.
 * Animações ficam no CSS — sem biblioteca extra.
 */
export function useRevealOnScroll() {
  const el = ref(null)
  let observer
  let timer

  onMounted(() => {
    if (!el.value || !('IntersectionObserver' in window)) {
      el.value?.classList.add('is-visible')
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el.value)

    // Se o observer falhar (aba inativa, print full-page), o conteúdo não fica invisível.
    timer = window.setTimeout(() => {
      el.value?.classList.add('is-visible')
    }, 900)
  })

  onUnmounted(() => {
    observer?.disconnect()
    if (timer) window.clearTimeout(timer)
  })

  return { el }
}
