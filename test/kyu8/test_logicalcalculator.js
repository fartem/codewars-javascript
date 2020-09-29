const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu8/logicalcalculator').solution

isNotTrue(
  solution([true, true, true, false], 'AND')
)
isTrue(
  solution([true, true, true, false], 'OR')
)
isTrue(
  solution([true, true, true, false], 'XOR')
)
isNotTrue(
  solution([true, true, false, false], 'AND')
)
isTrue(
  solution([true, true, false, false], 'OR')
)
isNotTrue(
  solution([true, true, false, false], 'XOR')
)
isNotTrue(
  solution([true, false, false, false], 'AND')
)
isTrue(
  solution([true, false, false, false], 'OR')
)
isTrue(
  solution([true, false, false, false], 'XOR')
)
isTrue(
  solution([true, true], 'AND')
)
isTrue(
  solution([true, true], 'OR')
)
isNotTrue(
  solution([true, true], 'XOR')
)
isNotTrue(
  solution([false, false], 'AND')
)
isNotTrue(
  solution([false, false], 'OR')
)
isNotTrue(
  solution([false, false], 'XOR')
)
isNotTrue(
  solution([false], 'AND')
)
isNotTrue(
  solution([false], 'OR')
)
isNotTrue(
  solution([false], 'XOR')
)
isTrue(
  solution([true], 'AND')
)
isTrue(
  solution([true], 'OR')
)
isTrue(
  solution([true], 'XOR')
)
