import { createRouter, createWebHistory } from 'vue-router'
import VueHomeView from '../views/vue/HomeView.vue'
import ABTestHomeView from '../views/abtest/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/vue',
    },
    {
      path: '/vue',
      name: 'demo',
      component: VueHomeView,
      children: [
        {
          path: 'demo01',
          name: 'vuedemo01',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/vue/Demo01View.vue'),
        },
        {
          path: 'demo02',
          name: 'vuedemo02',
          component: () => import('../views/vue/Demo02View.vue'),
        },
        {
          path: 'elem',
          name: 'elementplus',
          component: () => import('../views/vue/ElemDemoView.vue'),
        },
        {
          path: 'glogin',
          name: 'googlelogin',
          component: () => import('../views/vue/GloginView.vue'),
        },
      ],
    },
    {
      path: '/abtest',
      name: 'abtest',
      component: ABTestHomeView,
      children: [
        {
          path: 'run',
          name: 'abtestrun',
          component: () => import('../views/abtest/ABTestRunView.vue'),
        },
        {
          path: 'result',
          name: 'abtestresult',
          component: () => import('../views/abtest/ABTestResultView.vue'),
        },
      ],
    },
  ]
})

export default router
