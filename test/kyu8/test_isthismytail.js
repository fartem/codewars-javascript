const equal = require('chai').assert.equal

const solution = require('../../src/kyu8/isthismytail').solution

equal(
  solution('Fox', 'x'),
  true
)
equal(
  solution('Rhino', 'o'),
  true
)
equal(
  solution('Meerkat', 't'),
  true
)
