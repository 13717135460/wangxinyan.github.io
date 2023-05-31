module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',  // 公共路径
  lintOnSave: false, // 关闭eslint检测
  configureWebpack: {
    // 关闭 webpack 的性能提示
    performance: {
      hints: false
    },

    //或者

    //警告 webpack 的性能提示
    // performance: {
    // 	hints:'warning',
    // 	// 入口起点的最大体积
    // 	maxEntrypointSize: 50000000,
    // 	// 生成文件的最大体积
    // 	maxAssetSize: 30000000,
    // 	// 只给出 js 文件的性能提示
    // 	assetFilter: function(assetFilename) {
    // 		return assetFilename.endsWith('.js');
    // 	}
    // }
  },
  devServer: {
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: { //配置多个跨域
      "/api": {
        target: "https://www.dongqiudi.com",
        changeOrigin: true,
        ws: true, //websocket支持
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/apis/": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true, //websocket支持
        secure: false,
        pathRewrite: {
          "^/apis/": ""
        }
      },
      "/api2": {
        target: "http://api.avatardata.cn",
        changeOrigin: true,
        ws: true, //websocket支持
        secure: false,
        pathRewrite: {
          "^/api2": ""
        }
      },
    }
  }
}