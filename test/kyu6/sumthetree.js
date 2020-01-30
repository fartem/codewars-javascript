const equal = require('chai').assert.equal

const sumTheTreeValues = require('../../src/kyu6/sumthetree').sumTheTreeValues

var simpleNode = {
  value: 10,
  left: {
    value: 1,
    left: null,
    right: null
  },
  right: {
    value: 2,
    left: null,
    right: null
  }
}
equal(
  sumTheTreeValues(simpleNode),
  13
)

var unbalancedNode = {
  value: 11,
  left: {
    value: 0,
    left: null,
    right: null
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
equal(
  sumTheTreeValues(unbalancedNode),
  12
)
