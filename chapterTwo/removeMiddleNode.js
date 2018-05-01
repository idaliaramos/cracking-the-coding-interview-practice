function removeMiddleNode2(node) {
  if (nodeToDelete === null) {
    return false;
  }
  next = node.next;
  node.val = next.val;
  node.next = next.next;
}
