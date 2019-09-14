import Vue from 'vue'
import Counter from './Counter.vue'
import store from '@/store/counter/store.js'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})