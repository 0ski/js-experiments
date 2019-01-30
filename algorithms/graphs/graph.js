const util = require('util');
const inspect = util.inspect.custom;
const seedrandom = require('seedrandom');

const Node = require('./node');
const {
  Queue,
} = require('../stackqueue');

class Graph {

  constructor(
    n=5, //number of nodes
    {
      directed,
      buckles,
      seed,
    } = {
      directed: true, //directed or undirected graph
      buckles: true, //if nodes could connect to themselves
      seed: 0,
    }
  ) {
    this.n = n;
    this.directed = directed;
    this.buckles = buckles;
    this._seed = seed;
    this._random = seedrandom(seed);
    this.nodes = Array.from({ length: n }, () => new Node());
  }

  createFullyConnected() {
    let {
      n, directed, buckles, nodes,
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
      node.setConnections(nodesToSet);
    });
    this.connections = connections;

    return this;
  }

  randomizeConnections(total=10) {
    let {
      n, directed, buckles, nodes,
    } = this;

    console.log(`Randomizing ${total} connections for ${n} nodes`);

    let max = n * (n - 1);
    if (!directed) max = max / 2;
    if (buckles) max = max + n;
    let toRemove = Math.max(max - total, 0);

    console.log(`From fully connected graph got to remove ${toRemove} connections`);

    this.createFullyConnected();

    let filterOutConnection = (row, col) => {
      nodes[row].removeConnection(nodes[col]);
      this.connections[row] = this.connections[row].filter(
        connection => !(connection[0] === row && connection[1] === col)
      );
    };

    for (let i = 0; i < toRemove; i++) {
      let flattenConnections = this.connections.reduce(
        (acc, nodeConnections) => acc.concat(nodeConnections), []
      );
      let rand = Math.floor(this._random() * 1000000) % flattenConnections.length;
      let connectionToRemove = flattenConnections[rand];
      let [row, col] = connectionToRemove;

      // console.log(`Removing connection from ${row} to ${col}`);
      filterOutConnection(row, col);
      if (!directed && row !== col) {
        filterOutConnection(col, row);
      }
    }

    return this;
  }

  isInGraph(node) {
    if (node instanceof Node) node = this.getNodeId(node);
    return node > -1 && node < this.nodes.length;
  }

  getNodeId(node) {
    return this.nodes.indexOf(node);
  }

  getNode(id) {
    return this.nodes[id];
  }

  getConnectionIds(node) {
    return node.connections().map(connection => this.getNodeId(connection));
  }

  findPathsAndCycles(start) {
    if (!this.isInGraph(start)) return;
    if (start instanceof Node) start = this.getNodeId(start);

    let node = this.nodes[start];
    if (node.connections().length === 0) return [[start]];

    let q = new Queue();
    let paths = [];

    node.connections().forEach(connection => {
      connection = this.getNodeId(connection);
      if (connection !== start) {
        q.enqueue([start, connection]);
      }
    });

    while (q.length > 0) {
      let path = q.dequeue();
      let id = path[path.length - 1];
      let node = this.getNode(id);

      node.connections().forEach(connection => {
        let connectionId = this.getNodeId(connection);
        let connectionPath = Array.from(path);

        if (!this.directed && connectionId === id) {
          return;
        } else if (path.indexOf(connectionId) > -1) {
          connectionPath.push(connectionId);
          paths.push(connectionPath);
          return;
        } else if (connection.connections().length === 0) {
          connectionPath.push(connectionId);
          paths.push(connectionPath);
          return;
        }

        connectionPath.push(connectionId);
        q.enqueue(connectionPath);
      });
    }

    return paths;
  }

  findPathsWithoutCycles(start) {
    let pathsAndCycles = this.findPathsAndCycles(start);
    return pathsAndCycles.filter(
      path => path.indexOf(path[path.length - 1]) === path.length - 1 && path.length > 1
    );
  }

  findCyclesToItself(start) {
    if (!this.isInGraph(start)) return;
    if (start instanceof Node) start = this.getNodeId(start);

    let node = this.nodes[start];
    if (node.connections().length === 0) return [];

    let q = new Queue();
    let paths = [];

    node.connections().forEach(connection => {
      connection = this.getNodeId(connection);
      if (connection !== start) {
        q.enqueue([start, connection]);
      }
    });

    while (q.length > 0) {
      let path = q.dequeue();
      let id = path[path.length - 1];
      let node = this.getNode(id);

      node.connections().forEach(connection => {
        let connectionId = this.getNodeId(connection);
        let connectionPath = Array.from(path);

        if (path.indexOf(connectionId) > -1) {
          connectionPath.push(connectionId);
          if (connectionId === start) paths.push(connectionPath);
          return;
        } else if (connection.connections().length === 0) {
          return;
        }

        connectionPath.push(connectionId);
        q.enqueue(connectionPath);
      });
    }

    return paths;
  }

  //Bi-directional search
  findShortestPath(start, finish) {
    if (!this.isInGraph(start) || !this.isInGraph(finish)) return;
    if (start instanceof Node) start = this.getNodeId(start);
    if (finish instanceof Node) finish = this.getNodeId(finish);
    if (start === finish) return [this.getNode(start)];

    let paths = [];

    let leftQ = new Queue();
    let rightQ = new Queue();

    let touchedByLeftSide = {
      [start]: [start],
    };
    let touchedByRightSide = {
      [finish]: [finish],
    };

    leftQ.enqueue([start]);
    rightQ.enqueue([finish]);

    while (leftQ.length > 0 && rightQ.length > 0) {
      let leftPath = Array.from(leftQ.dequeue());
      let rightPath = Array.from(rightQ.dequeue());

      let leftId = leftPath[leftPath.length - 1];
      let leftNode = this.getNode(leftId);
      leftNode.connections().forEach(connection => {
        let connectionId = this.getNodeId(connection);
        if (touchedByLeftSide[connectionId]) return;
        if (touchedByRightSide[connectionId]) return []; //continiue here for merge
      });
    }
  }

  toString() {
    return JSON.stringify(
      this.nodes.map(node => ({
        id: this.getNodeId(node),
        connections: node.connections().map(
          connection => this.getNodeId(connection)
        ),
      })), null, 2
    );
  }

  [inspect]() {
    return this.toString();
  }
}

module.exports = Graph;
