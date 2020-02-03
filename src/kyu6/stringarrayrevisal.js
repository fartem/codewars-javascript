/*
 * https://www.codewars.com/kata/59f08f89a5e129c543000069
 */

function removeDuplicates (strings) {
  strings.forEach(function (string, index, array) {
    array[index] = string.replace(/(.)\1+/g, '$1')
  })
  return strings
}

module.exports = {
  removeDuplicates
}
