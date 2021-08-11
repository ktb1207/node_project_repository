/**
 *
 * stream的理解
 *
 * 流（Stream），是一种数据传输手段，是端到端信息交换的一种方式，是有顺序的，是逐块读取数据、处理内容，用于顺序读取输入或写入输出
 *
 * 在很多时候，流（Stream）是字节流（Byte Steram）的简称，也就是长长的一串字节
 *
 * 除了字节流，还可以有视频流、音频流、数据流等
 *
 *
 * 流的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中
 *
 *
 * 流可以分成三部分：source、dest、pipe
 *
 * pipe,可以理解为source（源头）和dest(目标)之间的一个连接管道，让数据从source流向了dest，它的基本语法是：source.pipe(dest)
 * */

/**
 * node stream
 *
 * nodejs中，流用于管理和处理数据，可以使用流完成对大量数据的操作以及逐段处理的操作，流将要传输的数据处理成“块”(chunk)连续传输。
 *
 * 流的分类：4种基本类型：1-可写流；2-可读流；3-双工流；4-转换流
 *
 * 1-可写流：是对数据被写入的目的地的一种抽象，例如fs.createWriteStream()可以使用流将数据写入文件
 * 2-可读流：是对提供数据来源的一种抽象，例如fs.createReadStream() 可以从文件读取内容
 * 3-双工流：既可读又可写的流。例如 net.Socket
 * 4-转换流：可以在数据写入和读取时修改或转换数据的流，例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据
 *
 * 在NodeJS中HTTP服务器模块中，request 是可读流，response 是可写流
 *
 * fs 模块，能同时处理可读和可写文件流
 *
 * websocket通信，是一个全双工通信，发送方和接受方都是各自独立的方法，发送和接收都没有任何关系
 *
 * */

/**
 *
 * node中，stream的应用场景主要就是处理IO操作，而http请求和文件操作都属于IO操作
 * 1.get请求返回文件给客户端
 * 2.文件操作
 * 3.一些打包工具的底层操作
 */
import path from 'path';
import fs from 'fs';

const fileSource = path.join(path.resolve(), 'files/text.txt');
const copyDest = path.join(path.resolve(), 'files/copy.txt');
const pipeDest = path.join(path.resolve(), 'files/pipeCopy.txt');
// 创建可读流
const readStream = fs.createReadStream(fileSource);
let str = '';
// 当有数据可读时被触发
readStream.on('data', (chunk) => {
  console.log('开始读取...');
  str += chunk;
});

// pipe管道实现文件复制
const writePipeStream = fs.createWriteStream(pipeDest);
readStream.pipe(writePipeStream);

// 读取完成
readStream.on('end', (chunk) => {
  console.log('读取完成');
  // console.log(chunk); // undefined
  // 创建可写流--实现复制文件
  const writeStream = fs.createWriteStream(copyDest);
  // 写入数据
  writeStream.write(str, 'utf8');
  // 标记文件结尾
  writeStream.end();
  // 完成
  writeStream.on('finish', () => {
    console.log('文件复制成功');
  });
  // 失败
  writeStream.on('error', (err) => {
    console.log(err);
  });
});
// 读取失败
readStream.on('error', (err) => {
  console.log(err);
});
