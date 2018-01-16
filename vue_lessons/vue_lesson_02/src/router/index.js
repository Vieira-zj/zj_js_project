import Vue from 'vue'
import Router from 'vue-router'
import App from '@/pages/App'
import App2 from '@/pages/App2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/app2',
      name: 'App2',
      component: App2
    }
  ]
})
