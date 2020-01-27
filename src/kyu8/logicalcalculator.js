/*
 * https://www.codewars.com/kata/57096af70dad013aa200007b
 */

function logicalCalculator (array, operation) {
  switch (operation) {
    case 'AND':
      return and(array)
    case 'OR':
      return or(array)
    case 'XOR':
      return xor(array)
  }
}

function and (array) {
  if (array.every((x) => x === true) || array.every((x) => x === false)) {
    return array[0]
  }
  return false
}

function or (array) {
  return array.reduce((x, y, z) => { return x === y ? x : true })
}

function xor (array) {
  return array.reduce((x, y, z) => x !== y)
}

module.exports = {
  logicalCalculator
}
