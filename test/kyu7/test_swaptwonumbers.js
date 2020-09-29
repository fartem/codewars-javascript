const expect = require('chai').expect

const solution = require('../../src/kyu7/swaptwonumbers').solution

const array = [123, 456]
solution(array)

expect(array).to.have.all.members([456, 123])
