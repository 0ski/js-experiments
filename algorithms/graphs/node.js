class Node {
  constructor(connections=[]) {
    this._connections = Array.from(connections);
  }

  addConnection(node) {
    this._connections.push(node);
  }

  removeConnection(node) {
    this._connections = this._connections.filter(connection => connection !== node);
  }

  setConnections(nodes) {
    this._connections = nodes;
  }

  connections() {
    return this._connections;
  }
}

module.exports = Node;
