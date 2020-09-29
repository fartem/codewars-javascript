const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu8/doyouspeakenglish').solution

isTrue(
  solution('english')
)
isNotTrue(
  solution('egnlish')
)
