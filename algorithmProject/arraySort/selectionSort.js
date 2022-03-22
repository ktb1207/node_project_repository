/**
 * @description 选择排序
 *
 * 稳定性：稳定，指的是当待排序序列中有相同的元素时，它们的相对位置在排序前后不会发生改变
 *
 * 复杂度：O(n平方)
 *
 * 选择排序将数组划分为已排序和未排序两个序列，依次从未排序序列找出最小，放置已排序序列的末尾（升序）
 *
 * 外层循环，一次循环可从未排序序列找出一个最小元素，循环结束至：数组长度 -1
 *
 * 内层循环，循环未排序序列并找到一个最小元素
 *
 * 开始假设数组第一个元素为已排序序列，值为最小，剩余部分为未排序序列
 * @param {*} arr
 */
function selectionSort(arr) {
  let minIndex, temp;
  const _arr = [...arr];
  const len = _arr.length;
  for (let i = 0; i < len - 1; i++) {
    // 假定第一个值最小
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (_arr[j] < _arr[minIndex]) {
        minIndex = j;
      }
    }
    // 缓存值
    temp = _arr[i];
    // 最小元素，放置已排序序列末端
    _arr[i] = _arr[minIndex];
    // 交换
    _arr[minIndex] = temp;
  }
  return _arr;
}

const testArr = [5, 2, 3, 4, 1, 8, 6];
console.log(selectionSort(testArr));
