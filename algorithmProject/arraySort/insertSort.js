/**
 *@description 插入排序
 *
 * 稳定性：稳定
 * 复杂度：O(n平方)
 *
 * 适合少量数据情况下，比冒泡排序和选择排序高效
 *
 * 将原数组分为已排序和未排序两个数组，开始假定第一个元素为已排序，剩余为未排序
 *
 * 从未排序部分取出第一个元素，依次向已排序数组逐个扫描，直到已排序部分某个位置不大于（小于或等于）该元素，标记位置将其插入
 *
 * @param {*} arr
 */
function insertSort(arr) {
  const _arr = [...arr];
  const len = _arr.length;
  // preindex 指向已排序的最后位置
  // currentVal, 缓存未排序左边第一个元素
  let preIndex, currentVal;
  // i=1开始，假定第一个元素为已排序部分，剩余未排序
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    // 从未排序取出第一个元素并缓存
    currentVal = _arr[i];
    // 向已排序部分扫描，结束条件
    while (preIndex >= 0 && _arr[preIndex] > currentVal) {
      _arr[preIndex + 1] = _arr[preIndex];
      // 继续向前扫描
      preIndex--;
    }
    // 位置插入
    _arr[preIndex + 1] = currentVal;
  }
  return _arr;
}

const testArr = [5, 2, 3, 4, 1, 8, 6];

console.log(insertSort(testArr));
