/*
 * @Author: kongtb 
 * @Date: 2022-01-21 13:42:45 
 * @Last Modified by: kongtb
 * @Last Modified time: 2022-01-26 21:53:49
 */
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

/**
 *
 * @export
 * @param {number} num 毫秒数
 * @returns {Date}
 */
export function LimtTimeAddNow(num) {
  return new Date(new Date().getTime() + num).toUTCString();
}

/**
 *
 * @export
 * @param {string} fileUrl 文件路径
 * @returns {Date} 文件最后修改时间
 */
export async function getFileLastEditDate(fileUrl) {
  try {
    const stats = await fs.stat(fileUrl);
    return stats.ctime.toUTCString();
  } catch (err) {
    return '';
  }
}

export async function setConsultCache(ctx) {
  // 获取请求文件资源路径
  const url = ctx.url;
  const urlArr = url.split('/');
  urlArr.splice(0, 1);
  const fileUrl = resolvePath('htmlFiles', ...urlArr);
  // 获取请求信息if-none-match
  const reqIfNoneMatch = ctx.request.header['if-none-match'];
  // 获取请求信息if-modified-since
  const reqIfModifiedSince = ctx.request.header['if-modified-since'];
  if (reqIfNoneMatch) {
    // 优先处理Etag
    try {
      return await fs.readFile(fileUrl, 'utf-8').then((res) => {
        const md5 = createHash('md5');
        md5.update(res);
        const etag = md5.digest('hex');
        if (reqIfNoneMatch === '"' +etag+'"') {
          // 缓存有效
          ctx.body = null;
          ctx.response.etag = etag;
          ctx.response.status = 304;
          return true;
        } else {
          // 缓存过期
          ctx.response.etag = etag;
          ctx.response.status = 200;
          return false;
        }
      });
    } catch (err) {
      console.log('set etag error');
      return false;
    }
  } else if(reqIfModifiedSince) {
    // 其次Last-Modified
    const serverFileModified = await getFileLastEditDate(fileUrl);
    if (serverFileModified && new Date(serverFileModified).getTime() <= new Date(reqIfModifiedSince).getTime()) {
      // 缓存有效
      ctx.body = null;
      ctx.response.set('Last-Modified', reqIfModifiedSince);;
      ctx.response.status = 304;
      return true;
    } else {
      // 缓存过期
      ctx.response.set('Last-Modified', serverFileModified);
      ctx.response.status = 304;
      return false;
    }
  } else {
    // 首次请求--添加--Etag Last-Modified
    try {
      // Last-Modified
      const serverFileModified = await getFileLastEditDate(fileUrl);
      ctx.response.set('Last-Modified', serverFileModified);
      // Etag
      await fs.readFile(fileUrl, 'utf-8').then((res) => {
        const md5 = createHash('md5');
        md5.update(res);
        const etag = md5.digest('hex');
        ctx.response.etag = etag;
      });
    } catch (err) {
      console.log('set etag error');
    }
    return false;
  }
}
