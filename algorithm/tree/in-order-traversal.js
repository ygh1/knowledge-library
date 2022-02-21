// 循环将根节点和其的左子树入栈。
// 直到左子树为空时，访问栈顶元素，同时将栈顶元素作为当前元素，并出栈。
// 开始访问右子树，循环出栈直到整个栈为空时，则遍历结束。

function inorderTraversal (root) {
  const stack = [], res = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      const current = stack.pop()
      res.push(current.val)
      root = current.right
    }
  }
  return res
}