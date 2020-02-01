const equal = require('chai').assert.equal

const formatDataValue = require('../../src/kyu7/formatdatavalue').formatDataValue

equal(
  formatDataValue(900),
  '900MB'
)
equal(
  formatDataValue(1900),
  '1GB 900MB'
)
equal(
  formatDataValue(2),
  '2MB'
)
equal(
  formatDataValue(568232),
  '568GB 232MB'
)
equal(
  formatDataValue(568200),
  '568GB 200MB'
)
equal(
  formatDataValue(1000),
  '1GB'
)
equal(
  formatDataValue(123000000),
  '123TB'
)
equal(
  formatDataValue(123452267),
  '123TB 452GB 267MB'
)
equal(
  formatDataValue(855071),
  '855GB 71MB'
)
equal(
  formatDataValue(123002007),
  '123TB 2GB 7MB'
)
equal(
  formatDataValue(123002000),
  '123TB 2GB'
)
equal(
  formatDataValue(123020030),
  '123TB 20GB 30MB'
)
equal(
  formatDataValue(5003555),
  '5TB 3GB 555MB'
)
