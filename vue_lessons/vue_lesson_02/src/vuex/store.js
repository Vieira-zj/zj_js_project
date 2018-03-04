import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  history: [],
  todos: [
    { id: 1, text: 'Java', done: true },
    { id: 2, text: 'JavaScript', done: true },
    { id: 3, text: 'Golang', done: false }
  ]
}

// getters are functions
const getters = {
  count: state => state.count,
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  doneTodos: state => {
    let todos = state.todos.filter(todo => todo.done)
    let retTodos = []
    for (let todo of todos) {
      retTodos.push(todo.text)
    }
    return retTodos
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  recentHistory: state => {
    const limit = 5
    const end = state.history.length
    const begin = end - limit < 0 ? 0 : (end - limit)
    return state.history.slice(begin, end).toString().replace(/,/g, ', ')
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the first argument,
// followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins for debugging purposes.
const mutations = {
  increment (state) {
    state.count++
    state.history.push('add')
  },
  decrement (state) {
    state.count--
    state.history.push('min')
  }
}

// actions are functions that cause side effects and can involve asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  incrementAsyncPromise: ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve('increment done.')
      }, 1000)
    })
  }
}

// A Vuex instance is created by combining the state, mutations, actions, and getters.
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
