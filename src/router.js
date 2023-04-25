import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/login', component: () => import('./components/Login.vue') },
  { name: 'register', path: '/register', component: () => import('./components/Register.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
