import Vue from 'vue'
import Router from 'vue-router'

import App from '@/pages/App'
import HelloWorld from '@/pages/HelloWorld'
import VueDemo from '@/pages/VueDemo'
import RouterIndex from '@/pages/router_demos/RouterIndex'
import RouterDemo01 from '@/pages/router_demos/RouterDemo01'

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
    // router: user info pages
    {
      path: '/user',
      name: 'user_home',
      component: RouterIndex,
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
        { path: ':userid', component: User }
      ]
    },
    // router: example pages
    {
      path: '/router/:id',
      component: RouterDemo01,
      children: [
        { path: '', component: Default },
        { path: 'details', component: Details }
      ]
    }
  ]
})
