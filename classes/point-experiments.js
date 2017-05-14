const Point = require('./point');

let point1 = new Point();
console.log(point1);

let point2 = new Point([2, 0]);
console.log(point2);

let point3 = new Point(point2);
console.log(point3);
