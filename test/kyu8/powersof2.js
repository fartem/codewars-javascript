const expect = require('chai').expect

const powersOfTwo = require('../../src/kyu8/powersof2').powersOfTwo

expect(powersOfTwo(0)).to.have.all.members([1])
expect(powersOfTwo(1)).to.have.all.members([1, 2])
expect(powersOfTwo(4)).to.have.all.members([1, 2, 4, 8, 16])
