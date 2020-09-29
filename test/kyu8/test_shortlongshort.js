const equal = require('chai').assert.equal

const solution = require('../../src/kyu8/shortlongshort').solution

equal(
  solution('45', '1'),
  '1451'
)
equal(
  solution('13', '200'),
  '1320013'
)
equal(
  solution('Soon', 'Me'),
  'MeSoonMe'
)
equal(
  solution('U', 'False'),
  'UFalseU'
)
