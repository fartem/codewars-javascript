// https://www.codewars.com/kata/582bbdbcc190132e3e0001f3
function solution (string) {
  const array = string.split(' ')
  const indices = []
  array.filter((value, index) => {
    return parseInt(value, 2) % 2 === 0 && indices.push(index)
  }).sort((a, b) => {
    return a - b
  }).forEach((value, index) => {
    array[indices[index]] = value
  })
  return array.join(' ')
}

module.exports = {
  solution
}
