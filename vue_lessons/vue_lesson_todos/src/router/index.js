import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/views/Hello.vue'

Vue.use(VueRouter)

function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}

const routes = [
  // 路由组件传参
  { path: '/', component: Hello }, // No props, no nothing
  { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
  { path: '/static', component: Hello, props: { name: 'world' } }, // static values
  { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
