// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function (to, from, savedPosition) {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    console.log('scroll by savedPosition')
    return savedPosition
  }

  const position = {}
  // scroll to anchor by returning the selector
  if (to.hash) {
    position.selector = to.hash
    // specify offset of the element
    if (to.hash === '#anchor2') {
      position.offset = { y: 100 }
    }
    // bypass #1number check
    if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
      console.log('scroll by hash (selector and offset)')
      return position
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    console.log('retain current scroll position')
    return false
  }

  return new Promise(resolve => {
    console.log('scroll promise')
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      console.log('set position to top')
      position.x = 0
      position.y = 0
    }

    // wait for the out transition to complete (if necessary)
    this.app.$root.$once('triggerScroll', () => {
      // if the resolved position is falsy or an empty object,
      // will retain current scroll position.
      console.log('scroll by position after transition')
      resolve(position)
    })
  })
}