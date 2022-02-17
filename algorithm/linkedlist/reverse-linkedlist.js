// 循环
const reverseList = head => {
  let curr = null
  while (head) {
    // 保存下一个要循环的节点
    const next = head.next
    // 反转
    head.next = curr

    // 保存当
    curr = head

    // 循环
    head = next
  }
  return curr
}
// 递归
const reverseList = head => {
  return recurse(head, null)
}
const recurse = (head, prev) => {
  // 递归终止条件
  if (!head) {
    return prev
  }
  const next = head.next
  head.next = prev

  prev = head
  head = next
  return recurse(head, prev)
}

const linedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}
const reverse = reverseList(linedList)
console.log(reverse)
