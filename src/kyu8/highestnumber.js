/*
 * https://www.codewars.com/kata/595fdfe5ada6db9061000036
 */

function highestNumber (array) {
  if (array.length === 0) {
    throw new Error('Array is empty!')
  }
  return Math.max(...array)
}

module.exports = {
  highestNumber
}
