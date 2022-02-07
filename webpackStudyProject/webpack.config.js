const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    pathinfo: false,
  },
  resolve: {
    // 顺序解析不带有后缀名文件
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    // 指定node_module目录
    modules: [path.resolve(__dirname, 'node_modules')],
    //
    symlinks: false,
  },
  optimization: {
    // 将 runtime 代码拆分为一个单独的 chunk
    runtimeChunk: 'single',
    // 模块标识符 确保构建前后没有发生变化的模块hash值不变
    moduleIds: 'deterministic',
    // tree shaking
    usedExports: true,
    //
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
        },
        default: {
          name: 'utilCommon',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src'),
        // 标记此loader包含副作用
        sideEffects: true,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 标题
      title: '管理输出模板',
      // 模板文件
      template: path.resolve(__dirname, 'public', 'index.html'),
      // 输出文件名称，默认index.html
      filename: 'index.html',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 9001,
    // }),
  ],
  devServer: {
    // 静态文件目录
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    // gzip
    compress: true,
    historyApiFallback: true,
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
      progress: true,
    },
    // 代理
    proxy: {},
  },
  performance: {
    hints: false,
  },
};
