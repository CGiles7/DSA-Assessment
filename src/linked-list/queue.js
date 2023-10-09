const LinkedList = require("./linkedList");

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value);
  }

  dequeue() {
    // Delegates to the linked list's `remove` method
    return this.linkedList.remove(() => true); // Always remove the first element
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  isEmpty() {
    return !this.linkedList.head;
  }
}

module.exports = Queue;