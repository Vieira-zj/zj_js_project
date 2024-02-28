const tag = '[background.js]'

console.log(`${tag} load`)

self.addEventListener('fetch', event => {
  console.log(`${tag} fetch request:`, event.request.url)
})

// TODO: setInterval()
