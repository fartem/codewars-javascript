/*
 * https://www.codewars.com/kata/5a329fc9b6cfd7e8320000c9
 */

function formatDataValue (data) {
  let result = ''
  const tbs = data >= 1000000 ? Math.trunc(data / 1000000) : 0
  if (tbs > 0) {
    result += `${tbs}TB `
    data -= tbs * 1000000
  }
  const gbs = data >= 1000 ? Math.trunc(data / 1000) : 0
  if (gbs > 0) {
    result += `${gbs}GB `
    data -= gbs * 1000
  }
  const mbs = data
  if (mbs > 0) {
    result += `${mbs}MB `
  }
  return result ? result.trim() : '0MB'
}

module.exports = {
  formatDataValue
}
