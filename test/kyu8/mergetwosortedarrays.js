const expect = require('chai').expect

const mergeArrays = require('../../src/kyu8/mergetwosortedarrays').mergeArrays

expect(
  mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])
).to.have.all.members(
  [1, 2, 3, 4, 5, 6, 7, 8]
)
expect(
  mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])
).to.have.all.members(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
)
expect(
  mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])
).to.have.all.members(
  [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
)
