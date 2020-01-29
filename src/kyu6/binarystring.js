/*
 * https://www.codewars.com/kata/52654ea8e218b83553000666
 */

function toBinaryString (number) {
  const result = []
  do {
    result.unshift(Math.floor(number % 2))
    number /= 2
  } while (number >= 1)
  return result.join('')
}

module.exports = {
  toBinaryString
}
