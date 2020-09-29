const equal = require('chai').assert.equal

const solution = require('../../src/kyu6/binarystring').solution

equal(
  solution(0),
  '0'
)
equal(
  solution(6),
  '110'
)
equal(
  solution(9),
  '1001'
)
equal(
  solution(15),
  '1111'
)
