const {buildTree, buildTreeByRecurrence} = require('./buildTree.js');

const testArr = [
  {
    id: 1000,
    pid: null,
    name: '1号楼'
  },
  {
    id: 2000,
    pid: null,
    name: '2号楼'
  },
  {
    id: 1001,
    pid: 1000,
    name: '1单元'
  },
  {
    id: 102,
    pid: 1000,
    name: '2单元'
  },
  {
    id: 2001,
    pid: 2000,
    name: '1单元'
  }
]

// console.log(buildTree(testArr))
console.log(buildTreeByRecurrence(testArr))