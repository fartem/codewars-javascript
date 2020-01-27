const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const speakEnglish = require('../../src/kyu8/doyouspeakenglish').speakEnglish

isTrue(
  speakEnglish('english')
)
isNotTrue(
  speakEnglish('egnlish')
)
