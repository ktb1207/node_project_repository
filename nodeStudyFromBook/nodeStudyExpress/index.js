import express from 'express';
import home from './routes/home.js';
import about from './routes/about.js';
import requestTime from './middleware/requestTime.js';

const server = express();
const port = 9000;
// 中间件挂载
server.use(requestTime);
// 静态资源处理
server.use(express.static('public')); // 访问路径不需要带 /public
server.use('/static', express.static('staticFiles')); // 访问路径需要带 /static
// 路由模块
server.use('/home', home);
server.use('/about', about);
// 根路径
server.get('/', (req, res) => res.send('hello express'));
// 404
// 一定要写在所有访问路径的最后
// 原理就是当前面没有任何一个路由可以处理的时候，程序就会走到最后这个中间件，然后就可以当作 404 来处理了。
server.use((req, res) => {
  res.send('404 not found');
});

server.listen(port, () => console.log(`server is runing at http://localhost:${port}`));
