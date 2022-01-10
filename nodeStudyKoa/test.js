import Koa from 'koa';
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('print3');
  const nextValue = await next();
  console.log(nextValue);
});
app.use((ctx, next) => {
  return '123';
});
app.listen(8080, () => {
  console.log(`server is runing in localhost://${8080}`);
});
