import Koa from 'koa';
import staticServe from 'koa-static';
import mount from 'koa-mount';
const app = new Koa();
const port = 3000;
/**
 * koa-static 中间件使用理解说明
 * 1. 可以注册多个静态资源服务，会从上到下搜索匹配，返回静态文件
 * 2. 无法像express.static指定静态资源请求前缀--就是指定加载相对于哪个url的静态资源
 * 3. 可以结合koa-mount中间件实现指定静态资源访问请求前缀
 **/
app.use(
  staticServe('staticFile1', {
    index: 'test.html', // 默认 index: index.html
  })
);
app.use(staticServe('staticFile2/file'));

// http://localhost:3000/public/test.css 指向 staticFile2/file/test.css
app.use(mount('/public', staticServe('staticFile2/file')));
app.use(async (ctx) => {
  ctx.body = `hello koa`;
});

app.listen(port, () => {
  console.log(`server is runing in localhost://${port}`);
});
