const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu7/stringmatcher').solution

isNotTrue(
  solution('bouh', '0', 'buh')
)
isNotTrue(
  solution('kitten', 't', 'eink')
)
isNotTrue(
  solution('mentalist', 'l.st', 'metan')
)
isTrue(
  solution('impressionistic', 'isis isi', 'precomnt')
)
isTrue(
  solution('email box', 'bail', 'moxe')
)
isNotTrue(
  solution('detail', 'tlei', 'dai')
)
