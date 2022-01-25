### webpack 随记

1. webpack默认采用production环境
2. production与development环境区别

3. loader支持链式调用，从右向左被依次调用，第一个loader将其处理的结果传递给左侧下一个loader，最后一个loader需返回javascript资源。
4. 内置Asset Modules处理图片、字体资源。

5. 代码分离方案：SplitChunksPlugin