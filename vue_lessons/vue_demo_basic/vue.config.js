module.exports = {
  runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 项目包含多页面
  pages: {
    hello: {
      entry: 'src/pages/hello/main.js',
      template: 'public/index.html',
      filename: 'hello.html'
    },
    // page: nested components and route
    todos: {
      entry: 'src/pages/todos/main.js',
      template: 'public/index.html',
      filename: 'todos.html'
    },
    // page: fetch data by axios post
    ajax: {
      entry: 'src/pages/ajax/main.js',
      template: 'public/index.html',
      filename: 'ajax.html'
    },
    // page: vue scroller by hash
    scroller: {
      entry: 'src/pages/scroller/main.js',
      template: 'public/index.html',
      filename: 'scroller.html'
    },
    // page: vuex counter
    counter: {
      entry: 'src/pages/counter/main.js',
      template: 'public/index.html',
      filename: 'counter.html'
    },
    // page: vuex shopping cart
    shoppingcart: {
      entry: 'src/pages/shop/main.js',
      template: 'public/index.html',
      filename: 'shoppingcart.html'
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
