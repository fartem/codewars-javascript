const expect = require('chai').expect

const solution = require('../../src/kyu8/whatisbetween').solution

expect(solution(1, 4)).to.have.all.members([1, 2, 3, 4])
expect(solution(-2, 2)).to.have.all.members([-2, -1, 0, 1, 2])
