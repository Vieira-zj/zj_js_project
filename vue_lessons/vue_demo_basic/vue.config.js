module.exports = {
  runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 项目包含多页面
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
    },
    ajax: {
      entry: 'src/pages/ajax/main.js',
      template: 'public/base.html',
      filename: 'ajax.html'
    }
  },
  // axios域代理, 解决axios跨域问题
  devServer: {
    proxy: {
      'mockserver': {
        target: 'http://mockserver.test.com:8081',
        changeOrigin: true,
        ws: true,
        pathRewrite: {}
      }
    }
  }
}
