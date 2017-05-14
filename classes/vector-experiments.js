const Point = require('./point');
const Vector = require('./vector');

let vector1 = new Vector(new Point(1, 1), new Point(1, 1));
console.log(vector1);

let vector2 = new Vector([1, 3], [2, 10]);
console.log(vector2);
