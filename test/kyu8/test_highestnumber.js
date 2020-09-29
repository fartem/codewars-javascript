const equal = require('chai').assert.equal

const solution = require('../../src/kyu8/highestnumber').solution

equal(
  solution([12, 4, 6, 0]),
  12
)
equal(
  solution([2, 1.99, 2.01, 1.4]),
  2.01
)
