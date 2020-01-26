/*
 * https://www.codewars.com/kata/56f695399400f5d9ef000af5
 */

function correctTail (body, tail) {
  const sub = body.substr(body.length - tail.length)
  if (sub === tail) {
    return true
  }
  return false
}

module.exports = {
  correctTail
}
