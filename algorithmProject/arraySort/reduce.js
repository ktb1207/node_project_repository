/**
*
* @description 关于数组reduce用法
*
*
* 作为高阶函数使用：高阶函数是一个接收函数作为参数或将函数作为输出返回的函数。
*
*/

// 1. 方法将数组缩减为单个值

// 2.方法为数组的每个值（从左到右）执行提供的函数。

// 3. 方法不会改变原始数组。

// 4. reduce从index = 1开始遍历，index = 0直接作为上一轮(忽略)的返回值。

// 4. Array.reduce(function(total, currentVal, index, arr) {}, initialValue)

// 参数说明：
// total: 必须，函数上一轮遍历返回值
// currentVal: 必须，遍历当前元素值
// index: 可选，当前索引
// arr: 可选，当前元素指向的数组对象
// initialValue: 可选，作为初始值传递，即返回值为：原数组各元素计算总和 + initialValue;

// 记录执行次数
let num = 0;
const testArr = [9,3,8,4,1,7,2,5,6];

function callBack(total, currentVal, index, arr) {
  num ++;
  return total + currentVal;
}


const res = testArr.reduce(callBack);
console.log(num)
console.log(res)