const expect = require('chai').expect

const solution = require('../../src/kyu8/mergetwosortedarraysintoone').solution

expect(
  solution([1, 2, 3, 4], [5, 6, 7, 8])
).to.have.all.members(
  [1, 2, 3, 4, 5, 6, 7, 8]
)
expect(
  solution([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])
).to.have.all.members(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
)
expect(
  solution([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])
).to.have.all.members(
  [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
)
