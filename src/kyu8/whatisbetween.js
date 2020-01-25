/*
* https://www.codewars.com/kata/55ecd718f46fba02e5000029
*/

function range (a, b) {
  return Array.from({ length: b - a + 1 }, (v, k) => k + a)
}

module.exports = {
  range
}
