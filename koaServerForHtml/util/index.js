import { fileURLToPath } from 'url';
import path, { dirname as pathDirname } from 'path';
import fs from 'fs/promises';
import { createHash } from 'crypto';

export const filename = fileURLToPath(import.meta.url);
export const dirname = pathDirname(filename);

export function resolvePath(...args) {
  const root = path.resolve(dirname, '../', ...args);
  return root;
}

export function isHtml(str) {
  return /\.html$/.test(str);
}
export function isCss(str) {
  return /\.css$/.test(str);
}
export function isJs(str) {
  return /\.js$/.test(str);
}

export function LimtTimeAddNow(num) {
  return new Date(new Date().getTime() + num).toUTCString();
}

export async function getFileLastEditDate(fileUrl) {
  try {
    const stats = await fs.stat(fileUrl);
    return stats.ctime.toUTCString();
  } catch (err) {
    return '';
  }
}

export async function setEtag(ctx) {
  const url = ctx.url;
  const urlArr = url.split('/');
  urlArr.splice(0, 1);
  const fileUrl = resolvePath('htmlFiles', ...urlArr);
  const reqIfNoneMatch = ctx.request.header['if-None-Match'];
  console.log(reqIfNoneMatch);
  try {
    await fs.readFile(fileUrl, 'utf-8').then((res) => {
      const md5 = createHash('md5');
      md5.update(res);
      const etag = md5.digest('hex');
      if (reqIfNoneMatch && reqIfNoneMatch === etag) {
        ctx.response.status = 304;
      } else {
        // 发送新资源
        console.log(etag);
        ctx.response.etag = etag;
      }
    });
  } catch (err) {
    console.log('set etag error');
  }
}
