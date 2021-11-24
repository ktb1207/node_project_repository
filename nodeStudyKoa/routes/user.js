import Router from '@koa/router';

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'root user';
  next(); // 调用next，才会把请求控制权交给下一个路由中间件
});
router.get('/name', (ctx, next) => {
  ctx.body = 'root user name';
  // next(); 不调用next, 请求在此处处理完成即结束
});

export default router;
