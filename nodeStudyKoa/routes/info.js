import Router from '@koa/router';

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'root info';
  next();
});
router.get('/name', (ctx, next) => {
  ctx.body = 'root info name';
  next();
});

export default router;
