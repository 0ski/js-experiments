class Node {
  constructor(children=[]) {
    this._children = Array.from(children);
  }

  addChild(node) {
    this._children.push(node);
  }

  removeChild(node) {
    this._children = this._children.filter(child => child !== node);
  }

  setChildren(nodes) {
    this._children = nodes;
  }
}

module.exports = Node;
