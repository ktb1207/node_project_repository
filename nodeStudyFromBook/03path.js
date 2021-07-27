/**
 * @description 关于Node path模块
 * 
 * path模块作用：处理--文件和目录相关路径的工具，由于windows系统和linux系统路径区别
 * 
 * */ 

const path = require('path');

/**
 * 01
 * @member path.basename(path,ext?)
 * path: string
 * ext: 可选的文件扩展名
 * 作用：方法返回 path 的最后一部分，类似于 Unix basename 命令
*/

console.log('basename----:' + path.basename('/user/login/index.html'))
console.log('basename---:' + path.basename('/user/login/index.html', '.html'))

/**
 * 02
 * @member path.delimiter
 * 
 * 作用：提供特定于平台的路径定界符号
 * 
 * windows: ;
 * linux: :
 * */ 

console.log('delimiter---:'+ path.delimiter)

/**
 * 03
 * @member path.dirname(path)
 * 
 * path: string;
 * 作用： 返回参数path的目录路径
 * 
*/
console.log('dirname--:当前执行文件所在目录：' + path.dirname(__filename));
console.log(__dirname)
console.log(__filename)

/**
 * 04
 * @member path.extname(path)
 * 
 * path: string;
 * 作用：返回 path 的扩展名，即 path 的最后一部分中从最后一次出现的 .（句点）字符到字符串的结尾
 * ---：如果 path 的最后一部分中没有 .，或者除了 path 的基本名称的第一个字符之外没有 . 个字符，则返回空字符串。
 * 
*/

console.log('extname---:当前执行问价类型是：' + path.extname(__filename) + '文件');

/**
 * 05
 * @member path.format(pathObj)
 * pathObj:{dir: string, root: string,base: string, name: string,ext: string}
 * 作用：方法从对象返回路径字符串
 * 
 * 当向 pathObject 提供属性时，存在一个属性优先于另一个属性的组合：
 * --- 如果提供 pathObject.dir，则忽略 pathObject.root
 * --- 如果 pathObject.base 存在，则忽略 pathObject.ext 和 pathObject.name
 * */ 

console.log('format---:' + path.format({
  root: 'c',
  dir: 'user',
  name: 'test',
  ext: '.txt'
}))

/**
 * 06
 * @member path.parse(path)
 * 
 * path: string;
 * 作用：方法返回一个对象，其属性表示 path 的重要元素
 * 
*/

console.log('parse---: 当前执行文件详细信息：' + JSON.stringify(path.parse(__filename)));

/**
 * 07
 * @member path.isAbsolute(path)
 * 
 * path: string
 * 作用：方法确定 path 是否为绝对路径。
 * */ 

/**
 * 08
 * @member path.join([...paths])
 * ...paths:string路径片段的序列
 * 作用： 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
 * */ 

console.log('join---:' + path.join('c:/', '/user', 'index.html'));

/**
 * 09 
 * @member path.normalize(path)
 * 
 * path: string;
 * 
 * 作用：方法规范化给定的 path，解析 '..' 和 '.' 片段。
 * 
 * */ 

console.log('normalize---:' + path.normalize('c://user////foo/index.html'))

/**
 * 10
 * @member path.relative(from.to)
 * 
 * from: string;
 * to: string;
 * 作用： 方法根据当前工作目录返回从 from 到 to 的相对路径
 * 
 * */ 

/**
 * 11
 * @member path.resolve([...paths])
 * 
 * ...paths: string路径片段序列
 * 作用：方法将路径或路径片段的序列解析为绝对路径。
 * 
*/

/**
 * 12
 * @member path.win32
 * 
 * 作用： 属性提供对 path 方法的 Windows 特定实现的访问
 * 
*/

/**
 * 13
 * @member path.posix
 * 
 * 作用： 属性提供对 path 方法的 POSIX 特定实现的访问
 * 
 * 
*/

/**
 * 14 
 * @member path.sep
 * 
 * 作用： 提供特定于平台的路径片段分隔符：
 * 
 * --- Windows 上是 \
 * --- POSIX 上是 /
 * 
 * */ 