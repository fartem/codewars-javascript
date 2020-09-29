// https://www.codewars.com/kata/55847fcd3e7dadc9f800005f
function solution (firstNode, secondNode) {
  if (firstNode == null && secondNode == null) {
    return true
  }
  if (firstNode != null && secondNode != null) {
    return firstNode.val === secondNode.val && solution(firstNode.left, secondNode.left) && solution(firstNode.right, secondNode.right)
  }
  return false
}

module.exports = {
  solution
}
