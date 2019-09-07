import Vue from 'vue'
import Router from 'vue-router'

import App from '@/views/App'
import App1 from '@/views/App1'
import App2 from '@/views/App2'
import App3 from '@/views/App3'
import App4 from '@/views/App4'
import App5 from '@/views/App5'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/index', component: App },
    { path: '/app1', component: App1 },
    { path: '/app1/:lessonId', component: App1 },
    { path: '/app2/', component: App2 },
    { path: '/app2/:lessonId', component: App2 },
    { path: '/app3', component: App3 },
    { path: '/app4', component: App4 },
    { path: '/app5', component: App5 }
  ]
})
