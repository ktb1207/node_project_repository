/**
 * @description 快速排序
 * 
 * 稳定性： 不稳定
 *
 * 复杂度： O(nLog2n)
 *
 * 快速排序是对冒泡排序算法的一种改进，基本思想是通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小, 再按这种方法递归对这两部分数据分别进行快速排序。
 * 
 *
 * @param {*} arr
 */
function quickSort(arr){
  const _arr = [...arr];
  const rec = (ars) => {
    if (ars.length <= 1) {
      return ars;
    } else {
      const left = [], right = [];
      // 0为，基准元素
      const mid = ars[0];
      // i = 1 开始
      for (let i =1; i < ars.length; i++) {
        // 小于基准元素，放入left, 大于基准元素，放入right
        ars[i] < mid ? left.push(ars[i]) : right.push(ars[i]);
      }
      // 递归
      return [...rec(left), mid, ...rec(right)];
    }
  }
  return rec(_arr)
}

const testArr = [5, 2, 3, 4, 1, 8, 6];
console.log(quickSort(testArr));