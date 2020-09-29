const equal = require('chai').assert.equal

const solution = require('../../src/kyu7/rotatetothemax').solution

equal(
  solution(123),
  321
)
equal(
  solution(786),
  876
)
equal(
  solution('001'),
  100
)
equal(
  solution(999),
  999
)
equal(
  solution(10543),
  54310
)
