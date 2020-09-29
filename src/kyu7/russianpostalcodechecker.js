// https://www.codewars.com/kata/552e45cc30b0dbd01100001a
function solution (postcode) {
  return /^[1-4|6][0-9]{5}$/.test(postcode)
}

module.exports = {
  solution
}
