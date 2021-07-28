/**
 * @description url模块
 * 
 * 用于网址处理和解析的实用工具
 * 
 * */ 
import { URL } from 'url';

const myUrl = new URL('https://www.baidu.com:9001/rootpath/path/file?query1=string1&query2=striung2#hashValue');

const hash = myUrl.hash; // 获取和设置网址的hash部分
// url.host 和 url.hostname 之间的主要区别在于 url.hostname 不包括端口
const host = myUrl.host; // 获取和设置网址的主机部分
const hostName = myUrl.hostname; // 获取和设置网址的主机名部分,
//
const href = myUrl.href; // 获取和设置序列化的网址,获取 href 属性的值相当于调用 url.toString()
const origin = myUrl.origin; // 获取网址的源的只读的序列化
const pathName = myUrl.pathname; // 获取和设置网址的路径部分
const port = myUrl.port; // 获取和设置网址的端口部分
const protcol = myUrl.protocol; // 获取和设置网址的协议部分
const search = myUrl.search; // 获取和设置网址的序列化的查询部分
const userName = myUrl.username; // 获取和设置网址的用户名部分
const password = myUrl.password; // 获取和设置网址的密码部分。

const infoObj = {
  hash,
  host,
  hostName,
  href,
  origin,
  pathName,
  port,
  protcol,
  search,
  userName,
  password
}

console.log(JSON.stringify(infoObj))