const expect = require('chai').expect
const range = require('../../src/kyu8/whatisbetween').range

expect(range(1, 4)).to.have.all.members([1, 2, 3, 4])
expect(range(-2, 2)).to.have.all.members([-2, -1, 0, 1, 2])
