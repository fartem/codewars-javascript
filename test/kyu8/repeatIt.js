const equal = require('chai').assert.equal

const repeatIt = require('../../src/kyu8/repeatIt').repeatIt

equal(
  repeatIt('*', 3),
  '***'
)
equal(
  repeatIt('Hello', 11),
  'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
)
