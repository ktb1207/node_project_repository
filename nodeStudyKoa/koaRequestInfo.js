import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  /**
   * ctx.request信息
   *
   * 请求示例：http://localhost:3000/user/info?name=tom&age=18
   *
   * {
   *     method: 'GET',
   *     url: '/user/info?name=tom&age=18',
   *     header: {
   *       host: 'localhost:3000',
   *       connection: 'keep-alive',
   *       'cache-control': 'max-age=0',
   *       'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
   *       'sec-ch-ua-mobile': '?0',
   *       'sec-ch-ua-platform': '"Windows"',
   *       'upgrade-insecure-requests': '1',
   *       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
   *       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3;q=0.9',
   *       'sec-fetch-site': 'none',
   *       'sec-fetch-mode': 'navigate',
   *       'sec-fetch-user': '?1',
   *       'sec-fetch-dest': 'document',
   *       'accept-encoding': 'gzip, deflate, br',
   *       'accept-language': 'zh-CN,zh;q=0.9'
   *     }
   *   }
   *
   *
   *
   */
  if (!ctx.url.includes('.ico')) {
    // 请求示例：http://localhost:3000/user/info?name=tom&age=18
    console.log(`请求方法:${ctx.method}`); // GET
    console.log(`请求协议：${ctx.protocol}`); // http
    console.log(`请求href:${ctx.href}`); // http://localhost:3000/user/info?name=tom&age=18
    console.log(`请求origin:${ctx.origin}`); // http://localhost:3000
    console.log(`请求host:${ctx.host}`); // localhost:3000
    console.log(`请求url:${ctx.url}`); // /user/info?name=tom&age=18
    console.log(`请求path:${ctx.path}`); // /user/info
    console.log(`请求query:${JSON.stringify(ctx.query)}`); // {"name":"tom","age":"18"}
    console.log(`请求qusrystring:${ctx.querystring}`); // name=tom&age=18
  }
  ctx.body = `hello koa\n
  打印请求信息：\n
  请求方法:${ctx.method}\n
  请求协议：${ctx.protocol}\n
  请求href:${ctx.href}\n
  请求origin:${ctx.origin}\n
  请求host:${ctx.host}\n
  请求url:${ctx.url}\n
  请求path:${ctx.path}\n
  请求query:${JSON.stringify(ctx.query)}\n
  请求qusrystring:${ctx.querystring}\n
  `;
});

app.listen(3000, () => console.log(`server is runing localhost://${3000}`));
