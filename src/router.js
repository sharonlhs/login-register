import { createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./components/RegisterPage.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('./components/ForgotPassword.vue')
    }
  ]
})

export default routes
