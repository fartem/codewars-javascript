const equal = require('chai').assert.equal

const sum = require('../../src/kyu8/sumarrays').sum

equal(sum([]), 0)
equal(sum([1, 5.2, 4, 0, -1]), 9.2)
