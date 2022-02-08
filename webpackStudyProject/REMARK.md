### webpack 随记

1. webpack默认采用production环境
2. production与development环境区别：
- production默认启用TerserPlugin来压缩输出。

3. loader支持链式调用，从右向左被依次调用，第一个loader将其处理的结果传递给左侧下一个loader，最后一个loader需返回javascript资源。
4. 内置Asset Modules处理图片、字体资源。

5. 代码分离方案：optimization.SplitChunksPlugin
   - 默认只对node_modules内的模块进行提取。
   - chunks提供三个值：async, initial, all,默认值async
   + async: 对于动态加载的模块，默认配置会将该模块单独打包。
   ```js
  // 使用import动态加载
  import('lodash');
   ```
   webpack 将根据以下条件自动拆分 chunks，默认规则：
   - 新的 chunk 可以被共享，或者模块来自于 node_modules 文件夹
   - 新的 chunk 体积大于 20kb(gzip之前)
   - 当按需加载 chunks 时，并行请求的最大数量小于或等于 30
   - 当加载初始化页面时，并发请求的最大数量小于或等于 30

  cacheGroups有两个默认缓存策略，也就是chunks为all和initail时的默认配置：
   ```js
  cacheGroups: {
        // node_modules
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        // 对于多入口引入的相同模块超过两次后，进行拆包操作, 需要注意，仅对多入口有效，我们平常的单页面应用默认只有一个入口文件，并不会分包，如需要分包，可以考虑使用动态加载
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
  }
   ````

6. optimization.runtimeChunk 将 runtime 代码拆分为一个单独的 chunk

7. 构建性能：
- webpack更新最新版本
- 将 loader 应用于最少数量的必要模块
- 引导loader/plugin查找
- 构建持久化缓存cache: development默认memory, production默认false
- 输出结果不携带路径信息output.pathinfo: false
- sourceMap区分开发环境和生产环境
- Tree Shaking
   + usedExports: true仅在打包输出bundle中标记未使用模块、
   + package.json添加字段sideEffects:false 标记无副作用
   + 仅production环境真正执行无用代码删除

8. webpack依赖Nodejs并遵循CommonJS模块规范。

9. 关于loader
   - 概述：loader 用于对引入资源模块的源代码进行转换，使得webpack能够处理其它非js文件。
   - 本质：loader 是导出为一个函数的 node 模块