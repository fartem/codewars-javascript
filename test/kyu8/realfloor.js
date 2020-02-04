const equal = require('chai').assert.equal

const getRealFloor = require('../../src/kyu8/realfloor').getRealFloor

equal(
  getRealFloor(1),
  0
)
equal(
  getRealFloor(5),
  4
)
equal(
  getRealFloor(15),
  13
)
