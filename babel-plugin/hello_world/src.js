function fnOne () {
  console.log('func one')
}

let fnTwo = () => {
  console.log('func two')
}

fnOne()
fnTwo()

setTimeout(() => {
  console.log('delay run')
}, 1000)
