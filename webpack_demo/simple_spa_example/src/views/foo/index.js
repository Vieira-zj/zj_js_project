import router from '@/router'
import template from './index.html'
// 引入 css, 会生成 <style> 块插入到 <head> 头中
import './style.css'

/*
小于10kb的图片, <img>标签的src被编译为Data URI格式
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA...">

大于10kb的图片, 图片会被储存到输出目录, src会被替换为打包后的路径
<img src="/assets/f78661bef717cf2cc2c2e5158f196384.png">
*/

class Foo {
  mount (container) {
    document.title = 'foo'
    container.innerHTML = template

    container.querySelector('.foo__gobar').addEventListener('click', () => {
      router.go('/bar')
    })
  }
}

export default Foo