import Vue from 'vue'
import VueRouter from 'vue-router'

import Common from '@/views/todos/Common.js'
import Todos from '@/views/todos/Todos.vue'
import NamedView from '@/views/todos/NamedView.vue'
import Props from '@/views/todos/PropsRouter.vue'
import Hello from '@/views/todos/PropsHello.vue'

Vue.use(VueRouter)

const routes = [
  // vue嵌套组件
  { path: '/todos', component: Todos },
  // 嵌套命名视图
  {
    path: '/router/namedview',
    component: NamedView,
    children: [
      {
        path: 'settings',
        // You could also have named views at tho top
        component: Common.elements.UserSettings,
        children: [
          {
            path: 'emails',
            component: Common.elements.UserEmailsSubscriptions
          },
          {
            path: 'profile',
            components: {
              default: Common.elements.UserProfile,
              helper: Common.elements.UserProfilePreview
            }
          }
        ]
      }
    ]
  },
  // 路由组件传参
  {
    path: '/router/props',
    component: Props,
    children: [
      { path: '', component: Hello }, // No props, no nothing
      { path: 'hello/:name', component: Hello, props: true }, // Pass route.params to props
      { path: 'static', component: Hello, props: { name: 'world' } }, // static values
      { path: 'dynamic/:years', component: Hello, props: Common.func.dynamicPropsFn } // custom logic
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