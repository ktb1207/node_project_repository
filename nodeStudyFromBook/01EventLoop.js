/**
 * @description 关于node事件循环机制的学习
 *
 *
 * 说明：node事件机制基于单线程，即存在一条主线程和event loop构成
 *
 * 主线程：会同步按顺序执行
 *
 * Event Loop: 主线程执行阶段，如果执行了任何非阻塞异步代码(创建计时器，读写文件，网络请求等)，则会进入event loop;
 *
 * 事件循环分为6个阶段：
 *
 * 01：Timers（计时器阶段）：初次进入事件循环，会从计时器阶段开始。
 * ---此阶段会判断是否存在过期的计时器回调（setTimeout setTimeInterval）,如果存在则会执行所有过期的计时器回调；
 * ---执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务；执行完微任务进入下一阶段:Pending callbacks
 *
 * 02: Pending callbacks: 系统调用相关的回调
 *
 * 03: Idle/Prepare: 内部使用
 *
 * 04：Poll(轮询阶段)：主要轮询回调队列是否有等待执行回调，分为两种情况：
 * ---当回调队列不为空时：会执行回调，若回调中触发了相应的微任务，这里的微任务执行时机和其他地方有所不同，不会等到所有回调执行完毕才会执行，而是针对每一个回调执行完毕后，就执行相应的微任务；
 * ---当回调队列为空时：但如果存在有计时器（setTimeout、setInterval和setImmediate）没有执行，会结束轮询阶段，进入 下一Check 阶段，否则会阻塞并等待任何正在执行的I/O操作完成，并马上执行相应的回调，直到所有回调执行完毕。
 *
 * 05：Check（检查阶段）：会检查是否存在 setImmediate 相关的回调，如果存在则执行所有回调，执行完毕后，如果回调中触发了相应的微任务，会接着执行所有微任务，之后进入 Close callbacks 阶段
 *
 * 06：Close callbacks：执行一些关闭回调
 *
 *
 * 关于6个阶段的说明：第2,3,6三个阶段是Node 内部使用的三个阶段，不必过度关心，与开发者代码相关的为第1,4,5三个阶段
 * */

/**
 *
 * @description 关于微任务
 *
 * node之中微任务包含了两部分：
 *
 * 01：process.nextTick() 注册的回调
 * 02：promise.then() 注册的回调
 *
 * 优先级说明：Node 在执行微任务时， 会优先执行 nextTick task queue 中的任务，执行完之后会接着执行 promise task queue 中的任务
 *
 * 执行时机：既可以在主线程（mainline）中执行，可以存在事件循序的某一个阶段中执行。
 * */

/**
 *
 * @description node定时器执行时机对比
 *
 * setImmediate：触发一个异步回调，在事件循环的 Check 阶段立即执行。
 *
 * setTimeout：触发一个异步回调，当计时器过期后，在事件循环的 Timers 阶段执行，只执行一次（可用 clearTimeout 取消）。
 *
 * setInterval：触发一个异步回调，每次计时器过期后，都会在事件循环的 Timers 阶段执行一次回调（可用 clearInterval 取消）。
 *
 */

const fs = require('fs');

console.log('main line start');
console.log('当前执行文件：' + __filename);
console.log('当前执行文件所在目录：' + __dirname);
// 主线程同步任务执行完毕，执行此处微任务
process.nextTick(() => {
  console.log('main run nextTick');
});

let counter = 0;

const interval = setInterval(() => {
  console.log('timers setInterval.start', counter);
  if (counter < 2) {
    setTimeout(() => {
      console.log('timer setInterval.setTimeout', counter);
      process.nextTick(() => {
        console.log('timers setInterval.setTimeout run nextTick');
      });
    }, 0);

    fs.readdir('./', (err, files) => {
      if (err) {
        console.log('readdir error1');
        return;
      }
      console.log('poll readdir success1');
      process.nextTick(() => {
        console.log('readdir one run nexttick');
      });
    });
    fs.readdir('./', (err, files) => {
      if (err) {
        console.log('readdir error2');
        return;
      }
      console.log('poll readdir success2');
      process.nextTick(() => {
        console.log('readdir two run nexttick');
      });
    });
    // check
    setImmediate(() => {
      console.log('one setImmediate');
    });
    setImmediate(() => {
      console.log('two setImmediate');
    });
  } else {
    console.log('timers setInterval.clear');
    clearInterval(interval);
  }
  console.log('timers setInterval.end', counter);
  counter++;
}, 10);

console.log('main line end');

/**
 *
 * @description 执行结果
 *
 * // 主线程同步执行开始
 * main line start
 * 当前执行文件：E:\NodeStudy\nodeStudyFromBook\01EventLoop.js
 * 当前执行文件所在目录：E:\NodeStudy\nodeStudyFromBook
 * main line end
 * // 主线程同步执行结束
 *
 * // 在主线程执行期间执行的微任务
 * main run nextTick
 *
 * // 第一次timers-外
 * timers setInterval.start 0
 * timers setInterval.end 0
 *
 * // 第一次check
 * one setImmediate
 * two setImmediate
 *
 * // 外层setInterval需要10等待。。。
 *
 * // 第二次timers-内
 * timer setInterval.setTimeout 1
 * timers setInterval.setTimeout run nextTick
 *
 * // 第一次poll
 * poll readdir success1
 * readdir one run nexttick
 * poll readdir success2
 * readdir two run nexttick
 *
 * // 第三次timers-外
 * timers setInterval.start 1
 * timers setInterval.end 1
 *
 * // 第二次check
 * one setImmediate
 * two setImmediate
 *
 * // 第四次timers-内
 * timer setInterval.setTimeout 2
 * timers setInterval.setTimeout run nextTick
 * poll readdir success1
 * readdir one run nexttick
 * poll readdir success2
 * readdir two run nexttick
 *
 * // 第五次timers-外
 * timers setInterval.start 2
 * timers setInterval.clear
 * timers setInterval.end 2
 *
 * */
