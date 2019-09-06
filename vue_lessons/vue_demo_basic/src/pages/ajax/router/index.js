import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '@/views/ajax/Common.js'
import FetchAfter from '@/views/ajax/FetchAfter.vue'
import FetchBefore from '@/views/ajax/FetchBefore.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Common.Home },
  { path: '/postbefore/:id', component: FetchBefore },
  { path: '/postafter/:id', component: FetchAfter }
]

const router = new VueRouter({
  routes
})

export default router