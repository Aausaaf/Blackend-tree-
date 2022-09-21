
  class Node {
    constructor(data) {
      this.left = null;
      this.data = data;
      this.right = null;
      if(!this.root)
      {
        this.root = data
      }
    }
    
    root()
  {
      return this.root;
  }

    children(root) {
    let visited = []
      let  queue = []
       let current =root;
    // console.log(root.left)
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.data);
  
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    };
  
      return visited;
  }
  hasChild(item) {
    
       let queue = [],
        current = root;
  
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
     // visited.push(current.data);
      if(current.data === item)
      {
        return current.data
      }
  
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    };
  
      return false;
  }
  isRoot(node)
  {
   return (node === root)?true : false
  }

  depth(root) {
    if (!root) return null;
  
    let node = null;
    let q = [];
    q.push(root);
  //console.log(root.data)
    while (q.length > 0) {
      node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return node.data;
  }
  
  }
  
  
  
  
  const root = new Node("Black");
  root.left = new Node("Blue");
  root.right = new Node("Red");
  root.left.left = new Node("Green");
  root.left.right = new Node("Blue");
  root.right.left = new Node("Purple");
  root.right.right = new Node("Brown");
  console.log(root.deepestNode(root));
  console.log(root.root())
  console.log(root.children(root.left))
  console.log(root.hasChild(22))
  console.log(root.isRoot(root))

  
  


