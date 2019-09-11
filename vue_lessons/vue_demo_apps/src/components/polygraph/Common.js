let valueToPoint = function (value, index, total) {
  let x = 0
  let y = -value * 0.8
  let angle = Math.PI * 2 / total * index
  let cos = Math.cos(angle)
  let sin = Math.sin(angle)
  let tx = x * cos - y * sin + 100
  let ty = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}

export default { valueToPoint }