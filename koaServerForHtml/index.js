import Koa from 'koa';
import staticServer from 'koa-static';
import koaMount from 'koa-mount';
import KoaRouter from '@koa/router';

import { dirname, filename } from './util/index.js';

const app = new Koa();
const router = new KoaRouter();
const serverPort = 3001;

// app.use(staticServer())

console.log(dirname);
console.log(filename);
