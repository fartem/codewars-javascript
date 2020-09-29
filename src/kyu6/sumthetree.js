// https://www.codewars.com/kata/5800580f8f7ddaea13000025
function solution (root) {
  if (root == null) {
    return 0
  }
  return root.value + solution(root.left) + solution(root.right)
}

module.exports = {
  solution
}
