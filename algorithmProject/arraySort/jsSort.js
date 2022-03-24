/**
*
* 关于JS中Array.sort()方法原理
*
*
*
* V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort。
*
* 可概括为：使用插入排序和快速排序的混合排序。
*
*
* 
*
**/

// 1. 默认排序顺序是根据字符串Unicode码点。
const r1 = ['h', 'hello', 'l', 'a'].sort()
console.log(r1)
// [ 'a', 'h', 'hello', 'l' ]

const r2 = [302, 12, 1002, 86].sort();
console.log(r2)
// [ 1002, 12, 302, 86 ]

// 2. 对数字数组排序，可以接受一个函数
// 函数第一个参数，代表下一个元素，第二个参数代表当前元素
const r3 = [302, 12, 1002, 86].sort(function(a,b){
  return a- b;
});
console.log(r3);