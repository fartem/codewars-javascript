const expect = require('chai').expect

const swap = require('../../src/kyu7/swaptwonumbers').swap

const array = [123, 456]
swap(array)

expect(array).to.have.all.members([456, 123])
