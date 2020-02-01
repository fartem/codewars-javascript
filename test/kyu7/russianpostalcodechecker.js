const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const zipValidate = require('../../src/kyu7/russianpostalcodechecker').zipValidate

isTrue(
  zipValidate('198328')
)
isTrue(
  zipValidate('310003')
)
isTrue(
  zipValidate('424000')
)
isNotTrue(
  zipValidate('12A483')
)
isNotTrue(
  zipValidate('63')
)
isNotTrue(
  zipValidate('1@')
)
isNotTrue(
  zipValidate('111')
)
isNotTrue(
  zipValidate('056879')
)
isNotTrue(
  zipValidate('1111111')
)
