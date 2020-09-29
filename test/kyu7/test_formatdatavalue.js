const equal = require('chai').assert.equal

const solution = require('../../src/kyu7/formatdatavalue').solution

equal(
  solution(900),
  '900MB'
)
equal(
  solution(1900),
  '1GB 900MB'
)
equal(
  solution(2),
  '2MB'
)
equal(
  solution(568232),
  '568GB 232MB'
)
equal(
  solution(568200),
  '568GB 200MB'
)
equal(
  solution(1000),
  '1GB'
)
equal(
  solution(123000000),
  '123TB'
)
equal(
  solution(123452267),
  '123TB 452GB 267MB'
)
equal(
  solution(855071),
  '855GB 71MB'
)
equal(
  solution(123002007),
  '123TB 2GB 7MB'
)
equal(
  solution(123002000),
  '123TB 2GB'
)
equal(
  solution(123020030),
  '123TB 20GB 30MB'
)
equal(
  solution(5003555),
  '5TB 3GB 555MB'
)
