const equal = require('chai').assert.equal

const shortLongShort = require('../../src/kyu8/shortlongshort').shortLongShort

equal(
  shortLongShort('45', '1'),
  '1451'
)
equal(
  shortLongShort('13', '200'),
  '1320013'
)
equal(
  shortLongShort('Soon', 'Me'),
  'MeSoonMe'
)
equal(
  shortLongShort('U', 'False'),
  'UFalseU'
)
