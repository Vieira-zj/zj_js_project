import Vue from 'vue'
import Router from 'vue-router'

import App from '@/pages/App'
import App2 from '@/pages/App2'
import App3 from '@/pages/App3'
import App4 from '@/pages/App4'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: App },
    { path: '/app2', component: App2 },
    { path: '/app2/:lessonId', component: App2 },
    { path: '/app3', component: App3 },
    { path: '/app4', component: App4 }
  ]
})
