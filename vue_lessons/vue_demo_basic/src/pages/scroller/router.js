import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '@/views/scroller/Post.vue'

Vue.use(VueRouter)

const Home = { template: '<h2>Ajax Home</h2>' }

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post },
  { path: '/post#header', component: Post },
  { path: '/post#paragraph1', component: Post },
  { path: '/post#paragraph2', component: Post },
  { path: '/post#footer', component: Post }
]

const router = new VueRouter({
  routes,
  // only trigger when router change
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return false
  }
})

export default router