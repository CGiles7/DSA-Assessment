const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
  }

  pop() {
    // Delegate the pop operation to the linked list
    const removedValue = this.linkedList.remove(() => true);
    return removedValue;
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

module.exports = Stack;