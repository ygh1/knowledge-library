var MyLinkedList = function() {
    this.head = null
  };
  
  /*
  @param {number} index
  @return {number}
  */
  MyLinkedList.prototype.get = function(index) {
    let current = this.head
    let i = 0
    while(current) {
        if (index === i++) {
            return current.value
        }
        current = current.next
    }
    return -1
  };
  
  /*
  @param {number} val
  @return {void}
  */
  MyLinkedList.prototype.addAtHead = function(val) {
    const head = {
        value: val,
        next: this.head
    }
    if (!this.head) {
        this.head = head
    } else {
        this.head = head    
    }
  };
  
  /*
  @param {number} val
  @return {void}
  */
  MyLinkedList.prototype.addAtTail = function(val) {
    let current = this.head
    const last = {
        value: val,
        next: null
    }
    if (!current) {
        this.head = last
        return
    }
    while(current.next) {
        current = current.next
    }
    current.next = last
  };
  
  /*
  @param {number} index 
  @param {number} val
  @return {void}
  */
  MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    let current = this.head
    let i = 0
    while(current && current.next) {
        if ((index - 1) === i++) {
            let next = current.next
  
            current.next = {
                value: val,
                next
            }
            return
        }
        current = current.next
    }
    if (index - 1 === i) {
        if (this.head) {
            this.addAtTail(val)
        }
    }
  };
  
  /*
  @param {number} index
  @return {void}
  */
  MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0) {
        if (this.head) {
            this.head = this.head.next
        }
        return
    }
    let current = this.head
    let i = 0
    let secendLast = null
    while (current && current.next) {
        if ((index - 1) === i++) {
            current.next = current.next.next
            return
        }
        if (current && current.next && !current.next.next) {
            secendLast = current
        }
        current = current.next
    }
    if (index === i && secendLast) {
        secendLast.next = {
            next: null
        }
    }
  };


  
  const obj = new MyLinkedList(null)
  obj.addAtIndex(1, 0)
  obj.get(0)

  console.log( JSON.stringify(obj.head) )
  