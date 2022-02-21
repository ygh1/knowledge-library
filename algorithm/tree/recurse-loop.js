const preOrder = []
const inOrder = []
const postOrder = []

function loop (root) {
  if (!root) {
    return
  }
  preOrder.push(root.value)
  loop(root.left)
  inOrder.push(root.value)
  loop(root.right)
  postOrder.push(root.value)
}

loop(root)