const equal = require('chai').assert.equal

const solution = require('../../src/kyu6/evenbinarysorting').solution

equal(
  solution('101 111 100 001 010'),
  '101 111 010 001 100'
)
equal(
  solution('110 011 001 100 101'),
  '100 011 001 110 101'
)
