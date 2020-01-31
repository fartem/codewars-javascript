/*
 * https://www.codewars.com/kata/579fa665bb9944f9340005d2
 */

function rotateToMax (number) {
  return parseInt(number.toString().split('').sort((a, b) => { return b - a }).join(''))
}

module.exports = {
  rotateToMax
}
