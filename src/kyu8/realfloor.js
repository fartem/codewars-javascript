// https://www.codewars.com/kata/574b3b1599d8f897470018f6
function solution (floor) {
  return floor <= 0 ? floor : floor >= 13 ? floor - 2 : floor - 1
}

module.exports = {
  solution
}
