/*
 * https://www.codewars.com/kata/59f08f89a5e129c543000069
 */

function removeDuplicates (strings) {
  return strings.map(s => s.replace(/(.)\1+/g, '$1'))
}

module.exports = {
  removeDuplicates
}
