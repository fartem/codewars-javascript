/*
 * https://www.codewars.com/kata/50654ddff44f800200000007
 */

function shortLongShort (a, b) {
  return a.length > b.length ? b + a + b : a + b + a
}

module.exports = {
  shortLongShort
}
