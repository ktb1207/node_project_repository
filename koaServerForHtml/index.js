import Koa from 'koa';
import staticServer from 'koa-static';
import koaMount from 'koa-mount';
import KoaRouter from '@koa/router';

import { resolvePath, isHtml, isCss, isJs, LimtTimeAddNow } from './util/index.js';


const app = new Koa();
const router = new KoaRouter();
const serverPort = 3001;

app.use(async (ctx, next) => {
  await next();
  if (isHtml(ctx.url)) {
    ctx.response.set('Cache-Control', ['max-age=3600', 'public'])
    ctx.response.set('Expires', LimtTimeAddNow(60*60*1000))
  }
  if (isJs(ctx.url)) {
    console.log('js')
  }
  if(isCss(ctx.url)){
    console.log('css')
  }
})

app.use(staticServer(resolvePath('htmlFiles'), {
  index: 'index.html'
}))

app.use(async (ctx) => {
  if (!ctx.body) {
    ctx.body = '404 NotFound';
  }
})

app.listen(serverPort, () => {
  console.log(`server is runing in http://localhost:${serverPort}`);
})
