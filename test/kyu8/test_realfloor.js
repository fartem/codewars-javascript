const equal = require('chai').assert.equal

const solution = require('../../src/kyu8/realfloor').solution

equal(
  solution(1),
  0
)
equal(
  solution(5),
  4
)
equal(
  solution(15),
  13
)
