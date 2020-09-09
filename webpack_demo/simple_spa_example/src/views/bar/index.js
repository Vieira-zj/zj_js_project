import router from '@/router'
import template from './index.html'
// 引入 css, 会生成 <style> 块插入到 <head> 头中
import './style.css'

class Bar {
  mount (container) {
    document.title = 'bar'
    container.innerHTML = template

    container.querySelector('.bar__gofoo').addEventListener('click', () => {
      router.go('/foo')
    })
  }
}

export default Bar