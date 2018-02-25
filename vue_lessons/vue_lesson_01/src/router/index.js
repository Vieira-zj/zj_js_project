import Vue from 'vue'
import Router from 'vue-router'

import App from '@/pages/App'
import HelloWorld from '@/pages/HelloWorld'
import VueDemo from '@/pages/VueDemo'

import RouterIndex from '@/pages/router_demos/RouterIndex'
import RouterDemo01 from '@/pages/router_demos/RouterDemo01'
import RouterDemo02 from '@/pages/router_demos/RouterDemo02'

import Hello from '@/components/props/Hello'

Vue.use(Router)

// user data
const Foo = { template: '<span>username: foo</span>' }
const Bar = { template: '<span>username: bar</span>' }
const User = { template: '<span>userid: {{ $route.params.userid }}</span>' }
const Default = { template: '<p>details: none</p>' }
const Details = { template: '<p>details: {{ $route.params.id }}, {{ $route.path }}, {{ $route.name }}</p>' }

// user settings
const UserSettingsNav = {
  template: `
<div class="us__nav">
  <router-link to="/user/settings/emails">emails</router-link>
  <br>
  <router-link to="/user/settings/profile">profile</router-link>
</div>
`
}

const UserSettings = {
  template: `
<div class="us">
  <p>User Settings</p>
  <user-settings-nav/>
  <router-view/>
  <router-view name="helper"/>
</div>
  `,
  components: { UserSettingsNav }
}

const UserEmails = {
  template: `
<div>
  <p>Email Subscriptions</p>
</div>
  `
}

const UserProfile = {
  template: `
<div>
  <p>Edit your profile</p>
</div>
  `
}

const UserProfilePreview = {
  template: `
<div>
  <p>Preview of your profile</p>
</div>
  `
}

// props
function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)).toString()
  }
}

// 404 - page not found
const NotFound = {
  template: `<h1 style='color:red;text-align:center'>Page Not Found!</h1>`
}

export default new Router({
  routes: [
    // main pages
    {
      path: '/',
      name: 'home',
      component: App
    },
    { path: '/hello', component: HelloWorld },
    { path: '/mydemo', component: VueDemo },
    // redirect pages
    {
      path: '/home', redirect: '/'
    },
    {
      path: '/index', redirect: { name: 'home' }
    },
    // router: user info pages
    {
      path: '/users',
      name: 'user_home',
      component: RouterIndex,
      alias: 'user',
      children: [
        { path: 'foo', component: Foo },
        { path: 'bar', component: Bar },
        {
          path: 'settings',
          component: UserSettings,
          children: [
            { path: 'emails', component: UserEmails },
            {
              path: 'profile',
              components: {
                default: UserProfile,
                helper: UserProfilePreview
              }
            }
          ]
        },
        { path: 'list/:userid', component: User }
      ]
    },
    // router: examples
    {
      path: '/router/:id',
      component: RouterDemo01,
      children: [
        { path: '', component: Default },
        { path: 'details', component: Details }
      ]
    },
    // props: examples
    {
      path: '/props',
      component: RouterDemo02,
      children: [
        { path: 'params/:name', component: Hello, props: true }, // pass route.params to props
        { path: 'static', component: Hello, props: { name: 'world' } }, // static values
        // custom logic for mapping between route and props
        { path: 'dynamic/:years', component: Hello, props: dynamicPropsFn },
        { path: 'search', component: Hello, props: (route) => ({ query: route.query.q }) }
      ]
    },
    // 404 - page not found
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404 not found'
      }
    }
  ]
})
