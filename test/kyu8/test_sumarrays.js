const equal = require('chai').assert.equal

const solution = require('../../src/kyu8/sumarrays').solution

equal(solution([]), 0)
equal(solution([1, 5.2, 4, 0, -1]), 9.2)
