const Point = require('../classes/point');

let proxyHandler = {
  construct: (proxiedClass, arrOfArgs) =>
    Reflect.construct(proxiedClass, arrOfArgs.map(arg => arg * arg)),
};

let ProxiedPoint = new Proxy(Point, proxyHandler);
let proxiedPoint = new ProxiedPoint(2, 3);
console.log(proxiedPoint); // [4, 9]
