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
  const pr = [];
  let res = '';
  for (let i = sNum.length - 1; i >= 0; i--) {
    step += 1;
    if (step%3 === 0) {
      pr.unshift(i);
      step = 0;
    }
  }
  pr[0] > 0 ? pr.unshift(0) : null;
  for(let j = 0; j < pr.length; j++) {
    debugger;
    if (j ===0) {
      res = res + sNum.slice(pr[j], pr[j + 1])
    } else {
      res = res + code + sNum.slice(pr[j], pr[j + 1])
    }
  }
  console.log(res)
}

const aNum = 9681245;

numberToStringAddCode(aNum)