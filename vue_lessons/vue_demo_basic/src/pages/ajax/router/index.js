import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '@/views/ajax/Common.js'
import FetchAfter from '@/views/ajax/FetchAfter.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Common.Home },
  { path: '/post/:id', component: FetchAfter }
]

const router = new VueRouter({
  routes
})

export default router