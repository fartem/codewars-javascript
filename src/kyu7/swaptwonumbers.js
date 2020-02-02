/*
 * https://www.codewars.com/kata/586ed14c35396d912100049a
 */

function swap (array) {
  array[0] = array[0] + array[1]
  array[1] = array[0] - array[1]
  array[0] = array[0] - array[1]
}

module.exports = {
  swap
}
