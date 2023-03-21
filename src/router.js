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
    }
  ]
})

export default routes
