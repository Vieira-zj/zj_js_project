import router from '@/router'
import template from './index.html'
import './style.css'

class Foo {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template

    container.querySelector('.foo__gobar').addEventListener('click', () => {
      router.go('/bar')
    })
  }
}

export default Foo