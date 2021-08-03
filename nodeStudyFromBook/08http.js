import http from 'http';

/**
 * http 模块
 * 
 * 01 类方法
 * --- 1.http.Agent
 * 
 * --- 2.http.Server
 * --- 作用：http.server类提供了实现http服务器的基本框架(node服务端)，继承自net模块的net.Server类
 * 
 * --- 3.http.createServer
 * --- 作用：启动http服务器，http.createServer方法创建一个http.Server对象
 * --- 4.http.ServerResponse 
 * --- 作用：当http服务器接收到一个request事件时，它在内部创建http.ServerResponse类的实例(对象)，该对象作为第2个参数被传递到request事件处理程序(res)

 * 
 * 
 * --- 5.http.ClientRequest 
 * --- 作用：http.ClientRequest类提供了实现http客户端的基本框架(node客户端)，可以通过http.reauest方法创建并返回一个http.ClientRequest对象
 * 
 * --- 6.http.request
 * --- 作用：构建一个http客户端，创建一个http.ClientRequest对象
 * --- 7.http.get
 * --- 作用：http.request的创建get请求的便捷对象，此方法与 http.request() 的唯一区别在于，它将方法设置为 GET 并自动调用 req.end()
 * --- 8.http.IncomingMessage 
 * --- 作用：只读，由http.Server和http.ClientRequest创建，并作为第1个参数分别传输给request(node客户端)和response(node服务端)事件(req)
 * 
 * --- 10.http.OutgoingMessage
 * --- 作用：该类作为 http.ClientRequest 和 http.ServerResponse 的父类
 * --- 9.http.globalAgent
 * 
 * 
 * */

const server = http.createServer((req, res) => {
  const headers = req.headers;
  const method = req.method;
  const url = req.url;
  const statusCode = req.statusCode;
  const statusMessage = req.statusMessage;
  const reqObj = {
    headers,
    method,
    url,
    statusCode,
    statusMessage,
  };
  /**
   * headers: {
   *  host: 'localhost:8080',
   *  connection: 'keep-alive',
   *  pragma: 'no-cache',
   *  'cache-control': 'no-cache',
   *  'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
   *  'sec-ch-ua-mobile': '?0',
   *  'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
   *  accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*;q=0.8',
   *  'sec-fetch-site': 'same-origin',
   *  'sec-fetch-mode': 'no-cors',
   *  'sec-fetch-dest': 'image',
   *  referer: 'http://localhost:8080/user/index.html?search=123&value=%E4%B8%AD%E5%9B%BD',
   *  'accept-encoding': 'gzip, deflate, br',
   *  'accept-language': 'zh-CN,zh;q=0.9'
   * },
   * method: 'GET',
   * url: '/user/index.html?search=123&value=%E4%B8%AD%E5%9B%BD',
   * statusCode: null,
   * statusMessage: null
   *
   * */

  /***
   * res
   *
   * 1.res.setHeader(name,value):设置特定响应头
   * 2.res.getHeader(name): 获取已在响应中设置的某个响应头
   * 3.res.removeHeader(name): 移除已在响应中的某个响应头
   * 4.res.write(data,[encoding])：发送响应体
   * 5.res.end(data,[encoding][,callback]): 结束响应
   * 6.res.statusCode:发送到客户端的状态码
   * 7.res.statusMessage: 发送到客户端的状态消息
   *
   * */
  if (req.url.includes('ico')) {
    res.statusCode = 500;
    res.statusMessage = 'forbid favicon.ico';
  }
  res.end('success end');
});
server.listen(8080);
console.log(`服务器正在运行：localhost:8080`);
