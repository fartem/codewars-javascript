const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const compare = require('../../src/kyu6/binarytreecompare').compare

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
  compare(
    firstTree,
    secondTree
  )
)
isNotTrue(
  compare(
    firstTree,
    thirdTree
  )
)
