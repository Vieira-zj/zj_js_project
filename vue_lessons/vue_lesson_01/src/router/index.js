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
const User = { template: '<span>userid: {{ $route.params.userid }}</span>' }

const Default = { template: '<p>details: none</p>' }
const Details = { template: '<p>details: {{ $route.params.id }}, {{ $route.path }}, {{ $route.name }}</p>' }

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
        { path: 'user/foo', component: Foo },
        { path: 'user/bar', component: Bar },
        { path: 'user/:userid', component: User }
      ]
    },
    {
      path: '/router/:id',
      component: RouterDemo01,
      children: [
        { path: '', component: Default },
        { path: 'details', name: 'router-details', component: Details }
      ]
    }
  ]
})
