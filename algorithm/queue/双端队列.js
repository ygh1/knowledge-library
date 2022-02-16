class DQueue {
  constructor () {
    this.queue = {}
    this.head = 0
    this.count = 0
  }
  addAtHead (item) {
    this.queue[--this.head] = item
  }
  deleteAtHead () {
    const deleteItem = this.queue[this.head]
    delete this.queue[this.head]
    this.head++
  }
  addAtFail () {
    this.queue[this.count++] = item
  }
  deleteAtFail () {
    const deleteItem = this.queue[this.count]
    delete this.queue[this.count - 1]
    this.count--
  }
  length () {
    return this.count - this.head
  }
  isEmpty () {
    return this.length() === 0
  }
}