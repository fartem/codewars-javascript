const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const isIntArray = require('../../src/kyu6/isintegerarray').isIntArray

isTrue(
  isIntArray([])
)
isTrue(
  isIntArray([1, 2, 3, 4])
)
isNotTrue(
  isIntArray([1, 2, 3, NaN])
)
