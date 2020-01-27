const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const logicalCalculator = require('../../src/kyu8/logicalcalculator').logicalCalculator

isNotTrue(
  logicalCalculator([true, true, true, false], 'AND')
)
isTrue(
  logicalCalculator([true, true, true, false], 'OR')
)
isTrue(
  logicalCalculator([true, true, true, false], 'XOR')
)
isNotTrue(
  logicalCalculator([true, true, false, false], 'AND')
)
isTrue(
  logicalCalculator([true, true, false, false], 'OR')
)
isNotTrue(
  logicalCalculator([true, true, false, false], 'XOR')
)
isNotTrue(
  logicalCalculator([true, false, false, false], 'AND')
)
isTrue(
  logicalCalculator([true, false, false, false], 'OR')
)
isTrue(
  logicalCalculator([true, false, false, false], 'XOR')
)
isTrue(
  logicalCalculator([true, true], 'AND')
)
isTrue(
  logicalCalculator([true, true], 'OR')
)
isNotTrue(
  logicalCalculator([true, true], 'XOR')
)
isNotTrue(
  logicalCalculator([false, false], 'AND')
)
isNotTrue(
  logicalCalculator([false, false], 'OR')
)
isNotTrue(
  logicalCalculator([false, false], 'XOR')
)
isNotTrue(
  logicalCalculator([false], 'AND')
)
isNotTrue(
  logicalCalculator([false], 'OR')
)
isNotTrue(
  logicalCalculator([false], 'XOR')
)
isTrue(
  logicalCalculator([true], 'AND')
)
isTrue(
  logicalCalculator([true], 'OR')
)
isTrue(
  logicalCalculator([true], 'XOR')
)
