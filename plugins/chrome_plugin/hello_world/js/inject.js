const tag = '[inject.js]'

console.log(`${tag} load`)

setInterval(() => {
  console.log(`${tag} loop: send message`)
  let msg = {
    'url': document.baseURI,
    'browser': navigator.userAgent,
  }
  window.postMessage(msg, '*')
}, 3000)
