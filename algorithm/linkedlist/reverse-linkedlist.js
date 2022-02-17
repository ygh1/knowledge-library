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
const reverse = reverseList(null)
console.log(reverse)
