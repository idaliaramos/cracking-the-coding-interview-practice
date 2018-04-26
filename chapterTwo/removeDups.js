function removeDups(root) {
  let vals = {};
  let currentNode = root;
  while (currentNode) {
    if (vals[currentNode.val]) {
      //delete node
      currentNode.previous.next = currentNode.next;
    } else {
      //add node to vals, and traverse
      vals[currentNode.val] = 1;
      //not sure about this part
      currentNode.previous = currentNode;
    }
    currentNode = currentNode.next;
  }
}
