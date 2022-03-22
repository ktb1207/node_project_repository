/**
 * @description 冒泡排序
 * 稳定性：稳定，指的是当待排序序列中有相同的元素时，它们的相对位置在排序前后不会发生改变
 * 复杂度：O(n平方)
 *
 * @param {*} arr
 *
 * 重复扫描待排序序列
 *
 * 外层循环：一次循环将一个大数冒泡升至尾部(升序),循环结束至：数组长度 - 1(循环至倒数第二个元素，即可与最后一个元素做比较)
 *
 * 内层循环：每一次外层循环，从前开始(index=0)循环比较相邻元素的大小，结束至：数组长度 - 1 - 外层已循环次数
 */
function bubblingSort(arr) {
  const _arr = [...arr];
  const len = _arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (_arr[j] > _arr[j + 1]) {
        const temp = _arr[j + 1];
        _arr[j + 1] = _arr[j];
        _arr[j] = temp;
      }
    }
  }
  return _arr;
}

const testArr = [5, 2, 3, 4, 1, 8, 6];

console.log(bubblingSort(testArr));
