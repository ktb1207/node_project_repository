import Koa from 'koa';
import staticServer from 'koa-static';
import koaMount from 'koa-mount';
import KoaRouter from '@koa/router';

import { resolvePath, isHtml, isCss, isJs, LimtTimeAddNow, setConsultCache } from './util/index.js';

const app = new Koa();
const router = new KoaRouter();
const serverPort = 3001;


app.use(async (ctx, next) => {
  if (isHtml(ctx.url)) {
    // 强缓存
    ctx.response.set('Cache-Control', 'no-cache');
    // 协商缓存
    const isAllow = await setConsultCache(ctx);
    if (!isAllow) {
      await next();
    }
  } else if(isCss(ctx.url)) {
    await next();
    ctx.response.set('Cache-Control', 'max-age=3600, public')  // 1h
    ctx.response.set('Expires', LimtTimeAddNow(60*60*1000)) // 1h
  } else if (isJs(ctx.url)) {
    await next();
    ctx.response.set('Cache-Control', 'max-age=3600, public') // 1h
    ctx.response.set('Expires', LimtTimeAddNow(60*60*1000)) // 1h
  } else {
    // 其它资源
    await next();
    ctx.response.set('Cache-Control', 'max-age=2592000') // 30d
    ctx.response.set('Expires', LimtTimeAddNow(30*24*60*60*1000)) // 30d
  }
});

app.use(
  staticServer(resolvePath('htmlFiles'), {
    index: 'index.html',
  })
);

app.use(async (ctx) => {
  if (!ctx.body) {
    ctx.body = '404 NotFound';
  }
});

app.listen(serverPort, () => {
  console.log(`server is runing in http://localhost:${serverPort}`);
});
