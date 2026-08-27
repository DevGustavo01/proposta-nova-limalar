import { createRouter, createWebHistory } from 'vue-router'

/**
 * Rotas institucionais. Títulos SEO são aplicados no layout a partir do JSON.
 */
export function createAppRouter() {
  return createRouter({
    history: createWebHistory(),
    scrollBehavior() {
      return { top: 0, behavior: 'smooth' }
    },
    routes: [
      {
        path: '/',
        component: () => import('@/presentation/layouts/InstitutionalLayout.vue'),
        children: [
          {
            path: '',
            name: 'home',
            component: () => import('@/presentation/views/HomeView.vue'),
          },
          {
            path: 'sobre',
            name: 'about',
            component: () => import('@/presentation/views/AboutView.vue'),
          },
          {
            path: 'servicos',
            name: 'services',
            component: () => import('@/presentation/views/ServicesView.vue'),
          },
          {
            path: 'servicos/:slug',
            name: 'service-detail',
            component: () => import('@/presentation/views/ServiceDetailView.vue'),
          },
          {
            path: 'temas',
            name: 'pests',
            component: () => import('@/presentation/views/PestsView.vue'),
          },
          {
            path: 'temas/:slug',
            name: 'pest-detail',
            component: () => import('@/presentation/views/PestDetailView.vue'),
          },
          {
            path: 'clientes',
            name: 'clients',
            component: () => import('@/presentation/views/ClientsView.vue'),
          },
          {
            path: 'contato',
            name: 'contact',
            component: () => import('@/presentation/views/ContactView.vue'),
          },
          {
            path: ':pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/presentation/views/NotFoundView.vue'),
          },
        ],
      },
    ],
  })
}
