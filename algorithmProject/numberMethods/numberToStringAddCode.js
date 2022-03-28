/**
*
* @description 数值转字符串并添加千位分隔符
*
**/ 

function numberToStringAddCode (num, code = ',') {
  if (typeof num !== 'number') {
    return;
  }
  const sNum = String(num);
  let step = 0;
  // 记录分隔符位置
  const codeInsertPosition = [];
  let res = '';
  // 倒序记录分隔符位置
  for (let i = sNum.length - 1; i >= 0; i--) {
    step += 1;
    if (step%3 === 0) {
      codeInsertPosition.unshift(i);
      step = 0;
    }
  }
  // 分隔符是否从第一位算起
  codeInsertPosition[0] > 0 ? codeInsertPosition.unshift(0) : null;
  for(let j = 0; j < codeInsertPosition.length; j++) {
    if (j ===0) {
      res = res + sNum.slice(codeInsertPosition[j], codeInsertPosition[j + 1])
    } else {
      res = res + code + sNum.slice(codeInsertPosition[j], codeInsertPosition[j + 1])
    }
  }
}

const aNum = 9681245;

const res = numberToStringAddCode(aNum);

console.log(res);