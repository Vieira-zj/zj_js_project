import Vue from 'vue'
import Vuex from 'vuex'

import part1 from './modules/part1'
import part2 from './modules/part2'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    part1,
    part2
  },
  strict: debug
})
