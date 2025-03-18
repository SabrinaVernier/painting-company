import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuotationView from '@/views/QuotationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quotation',
      name: 'quotation',
      component: QuotationView,
    },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router
