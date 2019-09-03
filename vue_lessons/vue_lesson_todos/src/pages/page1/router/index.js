import Vue from 'vue'
import VueRouter from 'vue-router'

import Common from '@/views/page1/Common.js'
import Hello from '@/views/page1/Hello.vue'
import Todos from '@/views/page1/Todos.vue'
import NamedView from '@/views/page1/NamedView.vue'
import PropsRouter from '@/views/page1/PropsRouter.vue'

Vue.use(VueRouter)

const routes = [
  // pages
  { path: '/todos', component: Todos },
  // 嵌套命名视图
  {
    path: '/router/namedview',
    component: NamedView,
    children: [
      {
        path: 'settings',
        // You could also have named views at tho top
        component: Common.UserSettings,
        children: [
          {
            path: 'emails',
            component: Common.UserEmailsSubscriptions
          },
          {
            path: 'profile',
            components: {
              default: Common.UserProfile,
              helper: Common.UserProfilePreview
            }
          }
        ]
      }
    ]
  },
  // 路由组件传参
  {
    path: '/router/props',
    component: PropsRouter,
    children: [
      { path: '', component: Hello }, // No props, no nothing
      { path: 'hello/:name', component: Hello, props: true }, // Pass route.params to props
      { path: 'static', component: Hello, props: { name: 'world' } }, // static values
      { path: 'dynamic/:years', component: Hello, props: Common.dynamicPropsFn } // custom logic
    ]
  },
]

const router = new VueRouter({
  // history mode and 404 error, refer:
  // https://router.vuejs.org/guide/essentials/history-mode.html
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
