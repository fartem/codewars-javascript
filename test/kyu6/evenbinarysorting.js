const equal = require('chai').assert.equal

const evenBinary = require('../../src/kyu6/evenbinarysorting').evenBinary

equal(
  evenBinary('101 111 100 001 010'),
  '101 111 010 001 100'
)
equal(
  evenBinary('110 011 001 100 101'),
  '100 011 001 110 101'
)
