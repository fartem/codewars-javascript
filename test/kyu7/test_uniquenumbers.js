const expect = require('chai').expect

const solution = require('../../src/kyu7/uniquenumbers').solution

expect(
  solution([1, 1, 2, 2])
).to.have.all.members(
  [1, 2]
)
