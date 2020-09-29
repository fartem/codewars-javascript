// https://www.codewars.com/kata/557af9418895e44de7000053
function solution (string, count) {
  if (typeof (string) === 'string' || string instanceof String) {
    return string.repeat(count)
  } else {
    return 'Not a string'
  }
}

module.exports = {
  solution
}
