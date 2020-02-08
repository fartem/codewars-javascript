/*
 * https://www.codewars.com/kata/57a083a57cb1f31db7000028
 */

function powersOfTwo (n) {
  return Array.from({ length: n > 0 ? n + 1 : 1 }, (x, i) => {
    return 2 ** i
  })
}

module.exports = {
  powersOfTwo
}
