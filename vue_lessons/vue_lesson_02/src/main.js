// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created: function () {
    console.log('hook: vue instance created.')
  },
  updated: function () {
    console.log('hook: virtual DOM re-render and patch.')
  }
})
