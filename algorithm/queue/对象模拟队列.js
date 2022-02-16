class Queue {
  constructor () {
    this.queue = {}
    this.head = 0
    this.count = 0
  }
  enQueue (item) {
    this.queue[this.count++] = item
  }
  deQueue () {
    const deleteItem = this.queue[this.head]
    delete this.queue[this.head]
    this.head++
  }
  length () {
    return this.count - this.head
  }
  isEmpty () {
    return this.length() === 0
  }
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.deQueue()
queue.deQueue()
queue.deQueue()