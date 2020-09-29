const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const solution = require('../../src/kyu7/wordsearch').solution

const text = 'what makes the desert beautiful, said the little prince is that somewhere it hides a well'

isTrue(
  solution('desert', text)
)
isNotTrue(
  solution('blue', text)
)
isTrue(
  solution('well', text)
)
isNotTrue(
  solution('house', text)
)
isTrue(
  solution('beautiful', text)
)
isTrue(
  solution('prince', text)
)
isNotTrue(
  solution('le prince', text)
)
