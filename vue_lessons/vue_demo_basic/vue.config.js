module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  pages: {
    hello: {
      entry: 'src/pages/hello/main.js',
      template: 'public/base.html',
      filename: 'hello.html'
    },
    todos: {
      entry: 'src/pages/todos/main.js',
      template: 'public/base.html',
      filename: 'todos.html'
    }
  }
}
