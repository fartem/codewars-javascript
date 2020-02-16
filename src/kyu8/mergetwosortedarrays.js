/*
 * https://www.codewars.com/kata/5899642f6e1b25935d000161
 */

function mergeArrays (first, second) {
  return Array.from(new Set(first.concat(second))).sort((a, b) => a - b)
}

module.exports = {
  mergeArrays
}
