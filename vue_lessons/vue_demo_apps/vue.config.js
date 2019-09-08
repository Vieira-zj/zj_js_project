module.exports = {
  runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    hello: {
      entry: 'src/pages/github/main.js',
      template: 'public/index.html',
      filename: 'github.html'
    }
  }
}
