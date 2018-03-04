// non-shared state
const state = () => {
  return {
    todos: [
      { id: 1, text: 'Java', done: true },
      { id: 2, text: 'JavaScript', done: true },
      { id: 3, text: 'Python', done: true },
      { id: 4, text: 'Golang', done: false }
    ]
  }
}

const getters = {
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
  }
}

export default {
  state,
  getters
}
