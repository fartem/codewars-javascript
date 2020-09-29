// https://www.codewars.com/kata/52a112d9488f506ae7000b95
function solution (array) {
  return Array.isArray(array) && array.every((value) => {
    return !isNaN(value) && typeof value === 'number' && value % 1 === 0
  })
}

module.exports = {
  solution
}
