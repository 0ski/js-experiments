const Point = require('../classes/point');

let proxyHandler = {
  construct: (proxiedClass, arrOfArgs) =>
    new (Function.prototype.bind.apply(Point))(arrOfArgs.map(item => item * item)),
};

let ProxiedPoint = new Proxy(Point, proxyHandler);
let proxiedPoint = new ProxiedPoint(2, 3);
console.log(proxiedPoint); // [4, 9]

let proxyHandlerForInstance = {
  get: (obj, paramName) => {
    if (paramName === 'x') {
      return obj.x + 1;
    } else if (paramName === 'y') {
      return obj.y + 1;
    } else {
      return obj[paramName];
    }
  },
};

let proxiedInstance = new Proxy(proxiedPoint, proxyHandlerForInstance);
console.log(proxiedPoint.x, proxiedInstance.x); //4, 5
