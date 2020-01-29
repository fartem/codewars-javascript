const equal = require('chai').assert.equal

const toBinaryString = require('../../src/kyu6/binarystring').toBinaryString

equal(
  toBinaryString(0),
  '0'
)
equal(
  toBinaryString(6),
  '110'
)
equal(
  toBinaryString(9),
  '1001'
)
equal(
  toBinaryString(15),
  '1111'
)
