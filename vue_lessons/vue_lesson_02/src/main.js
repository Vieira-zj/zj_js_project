// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

// https://www.jianshu.com/p/13bec8f5b17d
// https://github.com/vuejs/vuex/tree/dev/examples
// import store from './vuex/store'
import store from './store'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created: function () {
    console.info('hook: vue instance created.')
  },
  updated: function () {
    console.info('hook: virtual DOM re-render and patch.')
  }
})
