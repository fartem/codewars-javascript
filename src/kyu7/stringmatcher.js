// https://www.codewars.com/kata/565ce4ab24ef4aee6a000074
function solution (string, firstPart, secondPart) {
  return sortCharacters(string.replace(/ /g, '').toLowerCase()) === sortCharacters((firstPart + secondPart).replace(/ /g, '').toLowerCase())
}

function sortCharacters (string) {
  return string.split('').sort().join('')
}

module.exports = {
  solution
}
