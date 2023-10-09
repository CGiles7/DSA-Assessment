function removeDuplicates(sortedLinkedList) {
  if (!sortedLinkedList.head || !sortedLinkedList.head.next) {
    return sortedLinkedList;
  }

  let currentNode = sortedLinkedList.head;
  while (currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return sortedLinkedList;
}

module.exports = removeDuplicates;