const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'

module.exports = {
  publicPath: BASE_URL, // 路径
  // outputDir:'dist',  // 打包生成文件的路径
  // lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        // key,value自行定义，比如.set('@@', resolve('src/components'))
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // 链式操作配置webpack
    // config.resolve.alias.set("@", resolve("src")); //
    config
      .plugin('ScriptExtHtmlWebpackPlugin')
      .after('html')
      .use('script-ext-html-webpack-plugin', [{ inline: /runtime\..*\.js$/ }])
      .end()
    config.optimization.splitChunks({
      // 代码分割
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        elementUI: {
          name: 'chunk-iviewUI',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?view-design(.*)/
        },
        commons: {
          name: 'chunk-commons',
          test: resolve('@/components'),
          priority: 30
        }
      }
    })
    config.optimization.runtimeChunk('single')
  },
  productionSourceMap: false // 设为false打包时不生成.map文件
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}
