import path, { dirname } from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';

// 处理全局变量 __filename
const __filename = fileURLToPath(import.meta.url);
// 处理全局变量 __dirname
const __dirname = dirname(__filename);
// 定义静态文件目录
const staticUrl = path.join(__dirname, 'static');

console.log(path.join(staticUrl))
console.log(path.resolve('static'))

// 创建静态文件夹
fs.stat(staticUrl,(err, stats) => {
  if (err) {
    // 不存在-创建
    fs.mkdir(staticUrl, (err) => {
      if (err) {
        return console.log('创建静态文件夹失败')
      }
      console.log('静态文件夹创建成功')
    })
  } else {
    if(stats.isDirectory) {
      console.log('对的，就是一个文件夹')
    }
  }
})