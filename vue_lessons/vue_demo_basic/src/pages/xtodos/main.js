import Vue from 'vue'
import store from '@/store/xtodos'
import App from './App.vue'

new Vue({
  store, // inject store to all children
  el: '#app',
  render: h => h(App)
})