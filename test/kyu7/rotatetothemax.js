const equal = require('chai').assert.equal

const rotateToMax = require('../../src/kyu7/rotatetothemax').rotateToMax

equal(
  rotateToMax(123),
  321
)
equal(
  rotateToMax(786),
  876
)
equal(
  rotateToMax('001'),
  100
)
equal(
  rotateToMax(999),
  999
)
equal(
  rotateToMax(10543),
  54310
)
