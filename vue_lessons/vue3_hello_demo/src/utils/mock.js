// mock api
let timer = null

export function debounce (func, interval) {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    func()
  }, interval)
}

export function fetchUserRepositories (user) {
  return new Promise((resolve) => {
    debounce(() => {
      let repos = ['vue2-lessons', 'vue2-hello', 'vue3-hello']
      if (user.indexOf('js') !== -1) {
        repos = ['js-lessons', 'js-demos', 'js-hello']
      }
      resolve(repos)
    }, 1000)
  })
}
