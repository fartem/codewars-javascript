const expect = require('chai').expect

const solution = require('../../src/kyu8/powersof2').solution

expect(solution(0)).to.have.all.members([1])
expect(solution(1)).to.have.all.members([1, 2])
expect(solution(4)).to.have.all.members([1, 2, 4, 8, 16])
