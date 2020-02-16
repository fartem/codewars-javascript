/*
 * https://www.codewars.com/kata/557af9418895e44de7000053
 */

function repeatIt (string, count) {
  if (typeof (string) === 'string' || string instanceof String) {
    let result = ''
    while (count > 0) {
      result += string
      count--
    }
    return result
  } else {
    return 'Not a string'
  }
}

module.exports = {
  repeatIt
}
