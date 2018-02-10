import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import HelloWorld from '@/components/HelloWorld'
import VueDemo from '@/components/VueDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: App
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'VueDemo',
      component: VueDemo
    }
  ]
})
