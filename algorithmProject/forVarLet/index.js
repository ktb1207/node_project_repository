/**
*
*@description let var相关
*
*/ 
var a = [];
// 此处i是全局变量，循环对i值的修改都指向一个共同的全局变量
for (var i = 0; i < 6; i++) {
  console.log(i);
  a.push(i);
}
console.log(a);
// 最终 i = 6;
console.log(i);

const b = [];
// 此处i被let创建，属于块级作用域{}, 这样每次循环都会创建一个块级作用域并且存上i值。
for(let i = 0; i < 6; i++) {
  b.push(i);
}
console.log(i) // ReferenceError: i is not defined