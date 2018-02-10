import Vue from 'vue'
import Router from 'vue-router'

import App from '@/pages/App'
import HelloWorld from '@/pages/HelloWorld'
import VueDemo from '@/pages/VueDemo'
import RouterIndex from '@/pages/router_demos/RouterIndex'
import RouterDemo01 from '@/pages/router_demos/RouterDemo01'

Vue.use(Router)

const Foo = { template: '<span>username: foo</span>' }
const Bar = { template: '<span>username: bar</span>' }

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    { path: '/hello', component: HelloWorld },
    { path: '/mydemo', component: VueDemo },
    {
      path: '/router',
      component: RouterIndex,
      children: [
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar },
        { path: ':userid', component: RouterDemo01 }
      ]
    }
  ]
})
