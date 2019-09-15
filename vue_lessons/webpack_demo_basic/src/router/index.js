import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import View1 from '@/views/View1'
import View2 from '@/views/View2'
import View3 from '@/views/View3'
import View4 from '@/views/View4'
import View5 from '@/views/View5'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/index', component: Home },
    { path: '/app1', component: View1 },
    { path: '/app1/:lessonId', component: View1 },
    { path: '/app2/', component: View2 },
    { path: '/app2/:lessonId', component: View2 },
    { path: '/app3', component: View3 },
    { path: '/app4', component: View4 },
    { path: '/app5', component: View5 }
  ]
})
