/**
 * @description fs模块
 * 
 * 主要用于对系统文件及目录进行读写操作
 * 
 * */ 
// const fs = require('fs');
import fs from 'fs';
const access = fs.access;
const constants = fs.constants;
const file = 'package.json';

// 检查当前目录中是否存在该文件
access(file, constants.F_OK, (err) => {
  console.log(`文件${err ? '不存在' : '存在'}`)
})


/**
 * 01
 * @member access(path, mode, callback)
 * 
 * 作用：测试用户对 path 指定的文件或目录的权限
 * */ 

/**
 * 02
 * @member appendFile(path, data[, options], callback)
 * 
 * 作用：异步地将数据追加到文件，如果该文件尚不存在，则创建该文件。 data 可以是字符串或 <Buffer>。
 * */ 

/**
 * 03
 * @member chmod(path, mode, callback)
 * 
 * 作用：异步地更改文件的权限
 * */ 

/**
 * 03-01
 * @member fchmod(path, mode, callback)
 * 
 * 作用：设置文件的权限
 * */ 

/**
 * 04
 * @member chown(path, uid, gid, callback)
 * 
 * 作用：异步地更改文件的所有者和群组
 * */ 

/**
 * 04-01
 * @member fchown(path, uid, gid, callback)
 * 
 * 作用：设置文件的所有者
 * */

/**
 * 05
 * @member close(fd[, callback])
 * 
 * 作用：关闭文件描述符
*/

/**
 * 06
 * @member copyFile(src, dest[, mode], callback)
 * 
 * 作用：异步地将 src 复制到 dest。 默认情况下，如果 dest 已经存在，则会被覆盖
 * */ 

/**
 * 07
 * @member createReadStream(path[, options])
 * 
 * 作用：以从文件中读取一定范围的字节，而不是整个文件
 * */ 

/**
 * 08
 * @member createWriteStream(path[, options])
 * 
 * 作用：
 * */ 

/**
 * 09
 * @member fstat(fd[, options], callback)
 * 
 * 作用：获取文件的状态信息
 * */ 

/**
 * 09-01
 * @member stat(path[, options], callback)
 * 
 * 作用：获取文件的状态信息
 * */ 

/**
 * 10
 * @member futimes(fd, atime, mtime, callback)
 * 
 * 作用：更改提供的文件描述符引用的对象的文件系统时间戳
 * */ 

/**
 * 10-01
 * @member lutimes(path, atime, mtime, callback)
 * 
 * 作用：更改文件的访问和修改时间
 * */ 

/**
 * 11
 * @member mkdir(path[, options], callback)
 * 
 * 作用：异步地创建目录
 * */ 

/**
 * 11-01
 * @member mkdtemp(prefix[, options], callback)
 * 
 * 作用：创建唯一的临时目录。
 * */ 

/**
 * 12
 * @member open(path[, flags[, mode]], callback)
 * 
 * 作用：异步地打开文件
 * */ 

/**
 * 12-01
 * @member opendir(path[, options], callback)
 * 
 * 作用：异步地打开目录
 * */ 

/**
 * 13
 * @member read(fd, buffer, offset, length, position, callback)
 * 
 * 作用：从 fd 指定的文件中读取数据。
 * */ 

/**
 * 13-01
 * @member readdir(path[, options], callback)
 * 
 * 作用：读取目录的内容
 * */ 

/**
 * 13-02
 * @member readFile(path[, options], callback)
 * 
 * 作用：异步地读取文件的全部内容。
 * */

/**
 * 14
 * @member rename(oldPath, newPath, callback)
 * 
 * 将 oldPath 处的文件异步重命名为作为 newPath 提供的路径名。 如果 newPath 已经存在，则它将被覆盖
 * */ 

/**
 * 15
 * @member rmdir(path[, options], callback)
 * 
 * 作用：以异步的方式删除文件目录。
 * */ 

/**
 * 15-01
 * @member rm(path[, options], callback)
 * 
 * 作用：异步地删除文件和目录
 * */ 

/**
 * 15-02
 * @member unlink(path, callback)
 * 
 * 作用：异步地删除文件或符号链接
 * */ 

/**
 * 16
 * @member  truncate(path[, len], callback)
 * 
 * 作用：截断文件
*/

/**
 * 17
 * @member write(fd, string[, position[, encoding]], callback)
 * 
 * 作用：将 string 写入 fd 指定的文件。 如果 string 不是字符串，或者不是具有自有的 toString 函数属性的对象，则会抛出异常。
 * */ 

/**
 * 17-01
 * @member writeFile(file, data[, options], callback)
 * 
 * 作用：当 file 是文件名时，将数据异步地写入文件，如果文件已存在则替换该文件
 * */ 

/**
 * 17-03
 * @member writev(fd, buffers[, position], callback)
 * 
 * 作用：使用 writev() 将 ArrayBufferView 数组写入 fd 指定的文件。
 * */ 

/**
 * 18
 * @member watch(filename[, options][, listener])
 * 
 * 作用：监视 filename 的变化，其中 filename 是文件或目录。
 * */ 

/**
 * 18-01
 * @member watchFile(filename[, options], listener)
 * 
 * 作用：监视 filename 的变化。 每次访问文件时都会调用回调 listener。
 * */ 


/**
 * 18-02
 * @member unwatchFile(filename[, listener])
 * 
 * 作用：停止监视 filename 的变化
 * */ 