import router from '../../router'
import template from './index.html'
import './style.css'

class Bar {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template

    container.querySelector('.bar__gofoo').addEventListener('click', () => {
      router.go('/foo')
    })
  }
}

export default Bar