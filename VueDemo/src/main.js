// main.js

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import Detail from './pages/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

// eslint-disable-next-line
new Vue({
  el: '#app',
  data () {
    return {
      transitionName: 'slide'
    }
  },
  router,
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.substring(0, to.path.length - 2).split('/').length
      const fromDepth = from.path.substring(0, from.path.length - 2).split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
    }
  }
})
