const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      cacheGroups: {
        venders: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
        },
        utilCommon: {
          name: 'utilCommon',
          priority: -20,
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 标题
      title: '管理输出模板',
      // 模板文件
      template: path.resolve(__dirname, 'public', 'index.html'),
      // 输出文件名称，默认index.html
      filename: 'index.html'
    })
  ],
  devServer: {
    // 静态文件目录
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    // gzip
    compress: true,
    port: 9000,
    // 启用 webpack 的 热模块替换 特性
    hot: true,
    // 服务启动打开默认浏览器
    open: true,
    client: {
      logging: 'info',
      // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
      overlay: true,
      // 在浏览器中以百分比显示编译进度
      progress: true
    },
    // 代理
    proxy: {}
  }
};
