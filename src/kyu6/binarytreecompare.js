/*
 * https://www.codewars.com/kata/55847fcd3e7dadc9f800005f
 */

function compare (firstNode, secondNode) {
  if (firstNode == null && secondNode == null) {
    return true
  }
  if (firstNode != null && secondNode != null) {
    return firstNode.val === secondNode.val && compare(firstNode.left, secondNode.left) && compare(firstNode.right, secondNode.right)
  }
  return false
}

module.exports = {
  compare
}
