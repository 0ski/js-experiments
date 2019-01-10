const Graph = require('./graph');

let graph = new Graph(10, {
  unidirectional: false,
  buckles: false,
  seed: 1,
});

graph.randomizeConnections(25);
console.log('GRAPH:');
console.log(graph);

console.log('----------------');
console.log('PATHS WITH AND WITHOUT CYCLES');
graph.findPathsAndCycles(graph.getNode(0)).forEach(
  path => {
    console.log(path);
  }
);

console.log('----------------');
console.log('PATHS WITHOUT CYCLES');
graph.findPathsWithoutCycles(graph.getNode(0)).forEach(
  path => {
    console.log(path);
  }
);

console.log('----------------');
console.log('PATHS OF CYCLES TO ITSELF');
graph.findCyclesToItself(graph.getNode(0)).forEach(
  path => {
    console.log(path);
  }
);
