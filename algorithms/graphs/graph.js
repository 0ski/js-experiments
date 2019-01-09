const Node = require('./node');

class Graph {
  constructor(
    n=5, //number of nodes
    unidirectional=true, //two-ways direction when false
    buckles=true, //if nodes could connect to themselves
  ) {
    this.n = n;
    this.uni = unidirectional;
    this.buckles = buckles;
    this.nodes = Array.from({ length: n }, () => new Node());
  }

  createFullyConnected() {
    let {
      n, uni, buckles, nodes,
    } = this;

    let connections = Array(n)
                        .fill(() => [])
                        .map((_, i) => Array.from({ length: n }, (_, j) => [i, j]));

    if (!buckles) {
      connections = connections.map(nodeConnections => nodeConnections.filter(
          connection => connection[0] !== connection[1]
        )
      );
    }

    nodes.forEach(node => {
      let nodesToSet = Array.from(nodes);
      if (!buckles) nodesToSet = nodesToSet.filter(nodeToSet => node !== nodeToSet);
      node.setChildren(nodesToSet);
    });
    this.connections = connections;

    return this;
  }

  randomizeConnections(total=10, createConnected=false) {
    let {
      n, uni, buckles, nodes,
    } = this;

    console.log(`Randomizing ${total} connections for ${n} nodes`);

    let max = n * (n - 1);
    if (uni) max = max / 2;
    if (buckles) max = max + n;
    let toRemove = Math.max(max - total, 0);

    console.log(`From fully connected graph got to remove ${toRemove} connections`);

    this.createFullyConnected();

    let filterOutConnection = (row, col) => {
      nodes[row].removeChild(nodes[col]);
      this.connections[row] = this.connections[row].filter(
        connection => !(connection[0] === row && connection[1] === col)
      );
    };

    for (let i = 0; i < toRemove; i++) {
      let flattenConnections = this.connections.reduce(
        (acc, nodeConnections) => acc.concat(nodeConnections), []
      );
      let rand = Math.floor(Math.random() * 1000000) % flattenConnections.length;
      let connectionToRemove = flattenConnections[rand];
      let [row, col] = connectionToRemove;

      // console.log(`Removing connection from ${row} to ${col}`);
      filterOutConnection(row, col);
      if (uni && row !== col) {
        filterOutConnection(col, row);
      }
    }

    return this;
  }
}

module.exports = Graph;
