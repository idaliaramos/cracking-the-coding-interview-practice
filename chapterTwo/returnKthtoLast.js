function removeKth(root, k) {
  //start a runner that starts kth amounts
  let p1 = root;
  let p2 = root;
  //check root is not null
  if (p1 === null) {
    return false;
  }
  //move p2 to the kth position
  for (let i = 0; i < k; i++) {
    p2 = p2.next;
  }
  //move both at the same time until p2 is null, that means we got to the end of the list
  //and P1 is now kth from the end
  while (p2 != null) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return p1;
}
