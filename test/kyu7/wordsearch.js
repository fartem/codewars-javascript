const isTrue = require('chai').assert.isTrue
const isNotTrue = require('chai').assert.isNotTrue

const wordSearch = require('../../src/kyu7/wordsearch').wordSearch

const text = 'what makes the desert beautiful, said the little prince is that somewhere it hides a well'

isTrue(
  wordSearch('desert', text)
)
isNotTrue(
  wordSearch('blue', text)
)
isTrue(
  wordSearch('well', text)
)
isNotTrue(
  wordSearch('house', text)
)
isTrue(
  wordSearch('beautiful', text)
)
isTrue(
  wordSearch('prince', text)
)
isNotTrue(
  wordSearch('le prince', text)
)
