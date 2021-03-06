module.exports = {
  runtimeCompiler: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  pages: {
    github: {
      entry: 'src/pages/github/main.js',
      template: 'public/index.html',
      filename: 'github.html'
    },
    grid: {
      entry: 'src/pages/grid/main.js',
      template: 'public/index.html',
      filename: 'grid.html'
    },
    tree: {
      entry: 'src/pages/tree/main.js',
      template: 'public/index.html',
      filename: 'tree.html'
    },
    modal: {
      entry: 'src/pages/modal/main.js',
      template: 'public/index.html',
      filename: 'modal.html'
    },
    polygraph: {
      entry: 'src/pages/polygraph/main.js',
      template: 'public/index.html',
      filename: 'polygraph.html'
    }
  }
}
