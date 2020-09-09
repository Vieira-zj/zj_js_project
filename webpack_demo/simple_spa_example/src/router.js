import foo from './views/foo'
import bar from './views/bar'

const routes = {
  '/foo': foo,
  '/bar': bar
}

class Router {
  start () {
    // 点击浏览器后退 / 前进按钮时会触发 window.onpopstate 事件，我们在这时切换到相应页面
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })

    // 打开页面时加载当前页面
    this.load(location.pathname)
  }

  // 前往 path, 变更地址栏 URL, 并加载相应页面
  go (path) {
    history.pushState({}, '', path)
    this.load(path)
  }

  // 加载 path 路径的页面
  load (path) {
    if (path === '/') {
      path = '/foo'
    }

    const view = new routes[path]()
    view.mount(document.body)
  }
}

export default new Router()