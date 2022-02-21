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
const root = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 3
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 2,
    left: {
      value: 5,
    },
    right: {
      value: 6
    }
  }
}

loop(root)

console.log(preOrder)
console.log(inOrder)
console.log(postOrder)