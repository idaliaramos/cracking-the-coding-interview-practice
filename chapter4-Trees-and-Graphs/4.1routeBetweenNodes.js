//find if two nodes are connected

//version one, adding a visited property
function nodeConnect(startNode, endNode) {
  //traverse the tree,
  //find node one, see if node 2 exists
  //if yes rfeturn true, else false
  if (startNode === endNode) {
    return true;
  }
  let queue = [];
}

//version two, adding an visited nodes object
function nodeConnect(startNode, endNode) {
  //traverse the tree,
  //find node one, see if node 2 exists
  //if yes return true, else false
  let queue = [];
  let visited = {};
  let currentNode = startNode;

  while (queue.length > 0) {
    //add children of startNode to queue
    for (let children in currentNode) {
      let child = currentNode[children];
      if (visited[child]) {
        continue;
      } else {
        visted[child] = 1;
        queue.push(child);
      }
    }
    if (currentNode === endNode) {
      return true;
    }
    currentNode = queue.unshift();
  }

  return false;
}
