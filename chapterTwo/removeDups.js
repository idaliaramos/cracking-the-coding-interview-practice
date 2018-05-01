function removeDups(root) {
  let vals = {};
  let currentNode = root;
  let previous = null;
  while (currentNode) {
    if (vals[currentNode.val]) {
      //delete node
      previous.next = currentNode.next;
    } else {
      //add node to vals, and traverse
      vals[currentNode.val] = 1;
      //updateprevious
      previous = currentNode;
    }
    currentNode = currentNode.next;
  }
}
