class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        /* If the node only has a left child,
         */
        this._replaceWith(this.left);
      } else if (this.right) {
        /* And similarly if the node only has a right child 
           then you replace it with its right child */
        this._replaceWith(this.right);
      } else {
        /* If the node has no children */
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

// Ex 3

const exampleTree = new BinarySearchTree();
const array = [3, 1, 4, 6, 9, 2, 5, 7];
array.forEach((number) => exampleTree.insert(number));

const exampleTreeLetters = new BinarySearchTree();
const letters = ["E", "A", "S", "Y", "Q", "U", "E", "S", "T", "I", "O", "N"];
letters.forEach((letter) => exampleTree.insert(letter));
// console.log(exampleTreeLetters);

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// sums the value of each node in a tree

// Write an algorithm to find the height of a binary search tree.
// What is the time complexity of your algorithm?
//EX 5
let counterLeft = 0;
let counterRight = 0;
function heightCalcualtor(values = []) {
  if (this.left) {
    values = this.left.heightCalcualtor(values);
    counterLeft++;
  }
  values.push(this.value);

  if (this.right) {
    values = this.right.dfs(valuesRight);
    counterRight++;
  }
  return Math.max(counterLeft, counterRight);
}
