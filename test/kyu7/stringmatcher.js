const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const isMatching = require('../../src/kyu7/stringmatcher').isMatching

isNotTrue(
  isMatching('bouh', '0', 'buh')
)
isNotTrue(
  isMatching('kitten', 't', 'eink')
)
isNotTrue(
  isMatching('mentalist', 'l.st', 'metan')
)
isTrue(
  isMatching('impressionistic', 'isis isi', 'precomnt')
)
isTrue(
  isMatching('email box', 'bail', 'moxe')
)
isNotTrue(
  isMatching('detail', 'tlei', 'dai')
)
