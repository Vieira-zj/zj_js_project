// instrument code only during testing
const plugins = []
if (process.env.NODE_ENV === 'test') {
  plugins.push([
    'babel-plugin-istanbul',
    {
      // specify some options for NYC instrumentation here
      extension: ['.js', '.vue'],
      exclude: ['**/Coverage*.vue'],
    },
  ])
}

module.exports = {
  presets: ['@vue/app'],
  plugins,
}
