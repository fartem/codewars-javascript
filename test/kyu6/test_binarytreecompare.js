const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu6/binarytreecompare').solution

var firstTree = {
  val: 1,
  left: null,
  right: null
}
var secondTree = {
  val: 1,
  left: null,
  right: null
}
var thirdTree = {
  val: 2,
  left: null,
  right: null
}

isTrue(
  solution(
    firstTree,
    secondTree
  )
)
isNotTrue(
  solution(
    firstTree,
    thirdTree
  )
)
