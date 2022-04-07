  
/**
 * @description 数组转树结构---非递归
 *
 * @param {*} arr
 * @param {string} [uniqueId='id']
 * @param {string} [parentName='pid']
 * @param {*} [rootId=null]
 */
function buildTree(arrData, uniqueId = 'id', parentName = 'pid', rootId = null) {
  const arr = [...arrData]
  const map = {}; // {id1: item1, id2: item2}
  arr.forEach(item => {
    // 初始化children属性
    item.children = item.children ?? [];
    // 构建id--item映射
    if (!map[item[uniqueId]]) {
      map[item[uniqueId]] = item
    }
  });
  // 遍历arr，依据item.pid 查找(map[id]===item.pid).children.push(item)
  arr.forEach(item => {
    if (item[parentName] !== rootId) {
      if (map[item[parentName]]) {
        map[item[parentName]].children.push(item);
      }
    }
  })
  // 过滤获取根节点树数据
  return filterResult = arr.filter(item => {
    return item[parentName] === rootId;
  })
}


/**
 * @description 数组转树结构数据---递归
 *
 * @param {*} arrData
 * @param {string} [uniqueId='id']
 * @param {string} [parentName='pid']
 * @param {*} [rootId=null]
 */
function buildTreeByRecurrence(arrData, uniqueId = 'id', parentName = 'pid', rootId = null) {
  if (!arrData) return;
  const arr = [...arrData];
  // 获取所有根节点
  function getRootData(arr) {
    const rootArr = [];
    arr.forEach(item => {
      if (item[parentName] === rootId) {
        rootArr.push(item);
      }
    })
    return rootArr;
  }

  function buildTree(arr, rootArr) {
    // 遍历根节点
    for (let i = 0; i< rootArr.length; i++) {
      const rootItem = rootArr[i];
      const childrenArr = [];
      const nowPId = rootItem[uniqueId];
      // 遍历所有节点，如果节点pid === 根节点id，添加至根节点children
      for(let j = 0; j < arr.length; j++){
        const item = arr[j];
        const itemPId = item[parentName];
        if (itemPId === nowPId) {
          childrenArr.push(item);
        }
      }
      rootItem.children = childrenArr;
      // 递归根节点children,当前children作为根节点
      if (childrenArr.length > 0) {
        buildTree(arr, childrenArr);
      }
    }
    return rootArr;
  }

  const rootArrs = getRootData(arr);
  return buildTree(arr, rootArrs) 
}

exports.buildTree = buildTree;

exports.buildTreeByRecurrence = buildTreeByRecurrence;