var MaxQueue = function() {
  this.queue = []
  this.deque = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if (!this.deque.length) {
    return -1
  }
  return this.deque[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value)
  while (
    this.deque.length &&
    this.deque[this.deque.length - 1] < value
  ) {
    this.deque.pop()
  }
  this.deque.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if (!this.deque.length) {
    return -1
  }
  const val = this.queue.shift()
  if (val === this.deque[0]) {
    this.deque.shift()
  }
  return val
};