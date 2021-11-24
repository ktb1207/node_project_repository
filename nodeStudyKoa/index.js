import Koa from 'koa';
import staticServe from 'koa-static';
import mount from 'koa-mount';
import Router from '@koa/router';
import userRouter from './routes/user.js';
import infoRouter from './routes/info.js';
const app = new Koa();
const router = new Router();
const port = 3000;
// 静态文件默认
app.use(
  staticServe('public', {
    index: 'hello.html',
  })
);
app.use(mount('/doc', staticServe('doc')));
// router
router.use('/user', userRouter.routes(), userRouter.allowedMethods());
router.use('/info', infoRouter.routes(), infoRouter.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx) => {
  // 当匹配的路由，调用next,控制权才会交由到此处，否则此处不会执行
  // 当请求没有与之匹配的路由处理，此处执行
  if (!ctx.body) {
    ctx.body = '404 NotFound';
  }
});

app.listen(port, () => {
  console.log(`server is runing in localhost://${port}`);
});
