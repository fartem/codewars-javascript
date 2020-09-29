function solution (word, text) {
  return new RegExp(`\\b${word}\\b`).test(text)
}

module.exports = {
  solution
}
