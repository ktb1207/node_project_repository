import Koa from 'koa';
import staticServer from 'koa-static';
import koaMount from 'koa-mount';
import KoaRouter from '@koa/router';

import { resolvePath } from './util/index.js';


const app = new Koa();
const router = new KoaRouter();
const serverPort = 3001;

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
