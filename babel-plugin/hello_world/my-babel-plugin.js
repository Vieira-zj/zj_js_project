module.exports = function (babel) {
  const { types: t } = babel

  return {
    visitor: {
      ArrowFunctionExpression (path) {
        const { params, body } = path.node
        // 创建了一个新的普通函数表达式 代替 箭头函数
        const newFunction = t.functionExpression(null, params, body)
        path.replaceWith(newFunction)
      },
    },
  }
}
