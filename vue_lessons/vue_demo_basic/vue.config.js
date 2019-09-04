module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  pages: {
    page1: {
      entry: 'src/pages/page1/main.js',
      template: 'public/base.html',
      filename: 'page1.html'
    },
    page2: {
      entry: 'src/pages/page2/main.js',
      template: 'public/base.html',
      filename: 'page2.html'
    }
  }
}
