const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu7/russianpostalcodechecker').solution

isTrue(
  solution('198328')
)
isTrue(
  solution('310003')
)
isTrue(
  solution('424000')
)
isNotTrue(
  solution('12A483')
)
isNotTrue(
  solution('63')
)
isNotTrue(
  solution('1@')
)
isNotTrue(
  solution('111')
)
isNotTrue(
  solution('056879')
)
isNotTrue(
  solution('1111111')
)
