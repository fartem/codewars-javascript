const expect = require('chai').expect

const uniqueNumbers = require('../../src/kyu7/uniquenumbers').uniqueNumbers

expect(
  uniqueNumbers([1, 1, 2, 2])
).to.have.all.members(
  [1, 2]
)
