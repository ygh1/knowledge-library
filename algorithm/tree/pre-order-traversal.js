const root = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left: {
      val: 5,
    },
    right: {
      val: 6
    }
  }
}
function preorderTraversal (root) {
  var stack = [root], res = []
  while (stack.length) {
    var current = stack.pop()
    if (!current) {
      break
    }
    res.push(current.val)

    if (current.right) {
      stack.push(current.right)
    }
    if (current.left) {
      stack.push(current.left)
    }
  }
  return res
}

console.log(preorderTraversal(root))

