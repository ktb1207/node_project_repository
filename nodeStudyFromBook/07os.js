
/**
 * os模块
 * 
 * 提供了与操作系统相关的实用方法和属性
 * */
// const os = require('os');
import * as os from 'os';

const eol = os.EOL; // 操作系统特定的行末标志。

const arch = os.arch(); // 编译 Node.js 二进制文件的操作系统的 CPU 架构
const hostname = os.hostname(); // 以字符串的形式返回操作系统的主机名。
const type = os.type(); // 返回的操作系统名字
const platform = os.platform(); // 返回标识操作系统平台的字符串
const release = os.release(); // 以字符串的形式返回操作系统
const cpus = os.cpus(); // 返回一个对象数组,每个逻辑 CPU 内核的信息。

const freemem = os.freemem(); // 返回空闲的系统内存量
const totalmem = os.totalmem(); // 返回系统的内存总量

const homedir = os.homedir(); // 返回当前用户的主目录的字符串路径。

const uptime = os.uptime(); // 返回系统的正常运行时间
console.log(uptime)

