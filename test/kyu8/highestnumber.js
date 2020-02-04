const equal = require('chai').assert.equal

const highestNumber = require('../../src/kyu8/highestnumber').highestNumber

equal(
  highestNumber([12, 4, 6, 0]),
  12
)
equal(
  highestNumber([2, 1.99, 2.01, 1.4]),
  2.01
)
