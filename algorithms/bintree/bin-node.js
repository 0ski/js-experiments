class BinNode {

  constructor(val) {
    this.val = val;
  }

  insert(val) {
    if (this.val === undefined) {
      this.val = val;
    } else if (this.val > val) {
      if (this.left !== undefined) {
        this.left.insert(val);
      } else {
        this.left = new BinNode(val);
      }
    } else {
      if (this.right !== undefined) {
        this.right.insert(val);
      } else {
        this.right = new BinNode(val);
      }
    }
  }

  contains(val) {
    if (this.val === val) {
      return true;
    } else if (this.val > val && this.left !== undefined) {
      return this.left.contains(val);
    } else if (this.val < val && this.right !== undefined) {
      return this.right.contains(val);
    } else {
      return false;
    }
  }

  inOrder(arr=[]) {
    if (this.left !== undefined) {
      this.left.inOrder(arr);
    }

    arr.push(this.val);

    if (this.right !== undefined) {
      this.right.inOrder(arr);
    }

    return arr;
  }

  inRevOrder(arr=[]) {
    if (this.right !== undefined) {
      this.right.inRevOrder(arr);
    }

    arr.push(this.val);

    if (this.left !== undefined) {
      this.left.inRevOrder(arr);
    }

    return arr;
  }

  preOrder(arr=[]) {

    arr.push(this.val);

    if (this.left !== undefined) {
      this.left.preOrder(arr);
    }

    if (this.right !== undefined) {
      this.right.preOrder(arr);
    }

    return arr;
  }

  postOrder(arr=[]) {

    if (this.left !== undefined) {
      this.left.postOrder(arr);
    }

    if (this.right !== undefined) {
      this.right.postOrder(arr);
    }

    arr.push(this.val);

    return arr;
  }
}

let test = [5, 10, 30, 2, 4, 8, 15, 7, 1];
let binTree = new BinNode();

test.forEach(num => {
  binTree.insert(num);
});

console.log(binTree.contains(30));
console.log(binTree.contains(40));

console.log(binTree.inOrder());
console.log(binTree.inRevOrder());
console.log(binTree.preOrder());
console.log(binTree.postOrder());

module.exports = BinNode;
