import { createRouter, createWebHistory } from 'vue-router'
import BookingPage from '../../src/pages/BookingPage.vue'
import IndexPage from '../../src/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/booking',
    component: BookingPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
