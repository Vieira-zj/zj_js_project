const { resolve } = require('path')
const glob = require('glob')
const internalIp = require('internal-ip')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeSiblingChunksPlugin = require('html-webpack-include-sibling-chunks-plugin')

const pkgInfo = require('./package.json')
const config = require('./config/' + (process.env.npm_config_config || 'default'))

const dev = Boolean(process.env.WEBPACK_SERVE)

const entries = glob.sync('./src/**/index.js')
const entry = {}
const htmlPlugins = []
for (const path of entries) {
  const template = path.replace('index.js', 'index.html')
  const chunkName = path.slice('./src/pages/'.length, -'/index.js'.length)
  entry[chunkName] = dev ? [path, template] : path
  htmlPlugins.push(new HtmlWebpackPlugin({
    template,
    filename: chunkName + '.html',
    chunksSortMode: 'none',
    chunks: [chunkName]
  }))
}

/*
entry:
{ foo: ['./src/pages/foo/index.js', './src/pages/foo/index.html'] }
当 foo 页面的 index.js 或 index.html 文件改动时，都会触发浏览器刷新该页面
*/

/*
htmlPlugins:
[
  new HtmlWebpackPlugin({
    template: './src/pages/bar/baz/index.html',
    filename: 'bar/baz.html',
    chunksSortMode: 'none',
    chunks: ['bar/baz']
  },
  new HtmlWebpackPlugin({
    template: './src/pages/bar/index.html',
    filename: 'bar.html',
    chunksSortMode: 'none',
    chunks: ['bar']
  },
  new HtmlWebpackPlugin({
    template: './src/pages/foo/index.html',
    filename: 'foo.html',
    chunksSortMode: 'none',
    chunks: ['foo']
  }
]
*/

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',

  entry,

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: dev ? [] : [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  output: {
    path: resolve(__dirname, 'dist'),
    // 输出的 entry 文件加上 hash
    filename: dev ? '[name].js' : '[chunkhash].js',
    chunkFilename: '[chunkhash].js'
    // 没有定义 publicPath, 否则访问 html 时需要带上 publicPath 前缀
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              /*
              html-loader 接受 attrs 参数，表示什么标签的什么属性需要调用 webpack 的 loader 进行打包。
              比如 <img> 标签的 src 属性，webpack 会把 <img> 引用的图片打包，然后 src 的属性值替换为打包后的路径。
              使用什么 loader 代码，同样是在 module.rules 定义中使用匹配的规则。

              如果 html-loader 不指定 attrs 参数，默认值是 img:src, 意味着会默认打包 <img> 标签的图片。
              这里我们加上 <link> 标签的 href 属性，用来打包入口 index.html 引入的 favicon.png 文件。
              */
              root: resolve(__dirname, 'src'),
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      },

      {
        test: /\.css$/,
        use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },

      {
        /*
        匹配 favicon.png
        上面的 html-loader 会把入口 index.html 引用的 favicon.png 图标文件解析出来进行打包
        打包规则就按照这里指定的 loader 执行
        */
        test: /favicon\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              /*
              name: 指定文件输出名
              [hash] 为源文件的hash值，[ext] 为后缀。
              */
              name: '[hash].[ext]'
            }
          }
        ]
      },

      // 图片文件的加载配置增加一个 exclude 参数
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        // 排除 favicon.png, 因为它已经由上面的 loader 处理了。如果不排除掉，它会被这个 loader 再处理一遍
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // 代码中插入环境变量
    new webpack.DefinePlugin({
      DEBUG: dev,
      VERSION: JSON.stringify(pkgInfo.version),
      CONFIG: JSON.stringify(config.runtimeConfig)
    }),

    /*
    使用文件路径的 hash 作为 moduleId。
    虽然我们使用 [chunkhash] 作为 chunk 的输出名，但仍然不够，
    因为 chunk 内部的每个 module 都有一个 id，webpack 默认使用递增的数字作为 moduleId。
    如果引入了一个新文件或删掉一个文件，可能会导致其他文件的 moduleId 也发生改变，
    那么受影响的 module 所在的 chunk 的 [chunkhash] 就会发生改变，导致缓存失效。
    因此使用文件路径的 hash 作为 moduleId 来避免这个问题。
    */
    new webpack.HashedModuleIdsPlugin(),

    /*
    这里不使用 [chunkhash]
    因为从同一个 chunk 抽离出来的 css 共享同一个 [chunkhash]
    [contenthash] 你可以简单理解为 moduleId + content 生成的 hash
    因此一个 chunk 中的多个 module 有自己的 [contenthash]
    */
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
      chunkFilename: '[contenthash].css'
    }),

    // 必须放在html-webpack-plugin前面
    new HtmlWebpackIncludeSiblingChunksPlugin(),

    ...htmlPlugins
  ],

  resolve: {
    // 定义路径别名
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },

  performance: {
    hints: dev ? false : 'warning'
  }
}

/*
访问页面：
http://localhost:8080/foo.html
http://localhost:8080/bar.html
http://localhost:8080/bar/baz.html
*/
if (dev) {
  module.exports.serve = {
    host: '0.0.0.0',
    hot: {
      host: {
        // 开发环境允许其他电脑访问
        client: internalIp.v4.sync(),
        server: '0.0.0.0'
      }
    },
    port: config.serve.port
  }
}