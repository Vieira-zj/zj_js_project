import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue',
      children: [
        {
          path: 'demo01',
          name: 'demo01',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/VueDemo01View.vue')
        },
        {
          path: 'demo02',
          name: 'demo02',
          component: () => import('../views/VueDemo02View.vue')
        }

      ],
    }
  ]
})

export default router
