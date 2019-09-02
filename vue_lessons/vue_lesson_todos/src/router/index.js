import Vue from 'vue'
import VueRouter from 'vue-router'
import Common from '@/views/Common.js'
import Hello from '@/views/Hello.vue'
import Todos from '@/views/Todos.vue'
import NamedRouter from '@/views/NamedRouter.vue'
import PropsRouter from '@/views/PropsRouter.vue'

Vue.use(VueRouter)

const routes = [
  // pages
  { path: '/todos', component: Todos },
  // 嵌套命名视图
  {
    path: '/router/named',
    component: NamedRouter,
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
