const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu6/isintegerarray').solution

isTrue(
  solution([])
)
isTrue(
  solution([1, 2, 3, 4])
)
isNotTrue(
  solution([1, 2, 3, NaN])
)
