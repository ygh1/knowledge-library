/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.stackA = {}
  this.countA = 0
  this.stackB = {}
  this.countB = 0
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stackA[this.countA++] = x
  if (this.countB === 0 || this.min() >= x) {
      this.stackB[this.countB++] = x
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.min() === this.top()) {
      delete this.stackB[--this.countB]
  }
  delete this.stackA[--this.countA]
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stackA[this.countA - 1]
};

/**
* @return {number}
*/
MinStack.prototype.min = function() {
  return this.stackB[this.countB - 1]
};

const obj = new MinStack()

obj.push(-2)
obj.push(0)
obj.push(-3)
obj.min()