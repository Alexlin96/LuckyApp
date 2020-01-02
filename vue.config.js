const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "/";

module.exports = {
  publicPath: BASE_URL, // 路径
  // outputDir:'dist',  // 打包生成文件的路径
  // lintOnSave: false,
  configureWebpack: {}, //在这里可以进行webpack配置 最终会被webpack-merge合并到最终的webpack配置里
  chainWebpack: config => {
    // 链式操作配置webpack
    config.resolve.alias.set("@", resolve("src")); // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  productionSourceMap: false // 设为false打包时不生成.map文件
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
};
