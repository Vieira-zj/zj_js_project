import Vue from 'vue'
import App from './App.vue'
import store from '@/store/shop/store.js'
import { currency } from './currency'

Vue.filter('currency', currency)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})