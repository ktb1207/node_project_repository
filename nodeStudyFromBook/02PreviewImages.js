const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const zlib = require('zlib');

// 流式读取文件
function readFile(filePath, contentType, res) {
  res.writeHead(200, { 'content-type': contentType, 'content-encoding': 'gzip' });
  const stream = fs.createReadStream(filePath);
  // 错误处理
  stream.on('error', function () {
    res.writeHead(500, { 'content-type': contentType });
    res.end('<h1>500服务器错误</h1>');
  });
  // 链式管道
  stream.pipe(zlib.createGzip()).pipe(res);
}
// 创建http服务
const server = http.createServer(function (req, res) {
  // 定义响应头类型
  const mime = {
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.tiff': 'image/tiff',
    '.pdf': 'application/pdf',
  };
  // 获取请求url
  let pathName = url.parse(req.url).pathname;
  // 对路径解码以防中文乱码
  pathName = decodeURI(pathName);
  // 获取资源文件绝对路径
  const filePath = path.resolve(__dirname + pathName);
  // 获取文件扩展名
  const extName = path.extname(pathName);
  const contentType = mime[extName] || 'text/plain';
  // 通过读取文件状态来决定如何读取静态文件
  fs.stat(filePath, function (err, stats) {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end('<h1>404没有找到</h1>');
    }
    // 文件存在且没有错误
    if (!err && stats.isFile) {
      readFile(filePath, contentType, res);
    }
    // 如果路径是目录
    if (!err && stats.isDirectory) {
      let html = '<head><meta charset="utf-8"/></head><body><ul>';
      // 获取当前目录
      const curDir = path.basename(path.relative(__dirname, filePath));
      // 读取该路径下的文件
      fs.readdir(filePath, function (err, files) {
        if (err) {
          res.writeHead(404, { 'content-type': 'text/html' });
          res.end('<h1>d读取文件失败</h1>');
        } else {
          for (const file of files) {
            const curPath = path.join(curDir, file);
            html += `<li><a href='${curPath}'>${file}</a></li>`;
          }
          html += '</ul></body>';
          res.writeHead(200, { 'content-type': 'text/html' });
          res.end(html);
        }
      });
    }
  });
});
//
const port = 8002;
server.listen(port, function () {
  console.log(`图片服务器正运行在端口：${port}`);
  console.log(`访问网址：http://localhost:${port}`);
});
