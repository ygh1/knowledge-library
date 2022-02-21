// const root = {
//   val: 0,
//   left: {
//     val: 1,
//     left: {
//       val: 3
//     },
//     right: {
//       val: 4
//     }
//   },
//   right: {
//     val: 2,
//     left: {
//       val: 5,
//     },
//     right: {
//       val: 6
//     }
//   }
// }
const root = {
  val: 3,
  left: {
    val: 1,
  },
  right: {
    val: 2
  }
}
function postorderTraversal (root) {
  var stack = [root], res = []
  while (stack.length) {
    var current = stack.pop()
    if (!current) {
      break
    }
    res.unshift(current.val)

    if (current.left) {
      stack.push(current.left)
    }
    if (current.right) {
      stack.push(current.right)
    }
    
  }
  return res
}

console.log(postorderTraversal(root))

