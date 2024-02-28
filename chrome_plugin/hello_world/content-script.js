const tag = '[content-script.js]'

console.log(`${tag} load`)

function injectJS () {
  let jsPath = 'js/inject.js'
  let elem = document.createElement('script')
  elem.setAttribute('type', 'text/javascript')
  elem.src = chrome.runtime.getURL(jsPath)

  elem.onload = function () {
    console.log(`${tag} removed after loaded`)
    this.parentNode.removeChild(this)
  }
  elem.onerror = function (e) {
    console.error('inject <script> element failed:', e)
  }
  document.head.appendChild(elem)
}

injectJS()

window.addEventListener('message', (msg) => {
  if (msg && msg.data) {
    console.log(`${tag} receive message:`, JSON.stringify(msg.data))
  }
}, false)
