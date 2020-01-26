const equal = require('chai').assert.equal

const correctTail = require('../../src/kyu8/isthismytail').correctTail

equal(
  correctTail('Fox', 'x'),
  true
)
equal(
  correctTail('Rhino', 'o'),
  true
)
equal(
  correctTail('Meerkat', 't'),
  true
)
