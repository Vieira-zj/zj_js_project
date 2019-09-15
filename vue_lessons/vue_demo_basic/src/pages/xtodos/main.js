import Vue from 'vue'
import App from './App.vue'
import store from '@/store/xtodos'

new Vue({
  store, // inject store to all children
  el: '#app',
  render: h => h(App)
})