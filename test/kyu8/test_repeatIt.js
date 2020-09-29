const equal = require('chai').assert.equal

const solution = require('../../src/kyu8/repeatIt').solution

equal(
  solution('*', 3),
  '***'
)
equal(
  solution('Hello', 11),
  'HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello'
)
