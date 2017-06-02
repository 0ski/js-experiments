const Vector = require('../classes/vector');
const Spy = require('./spy');
const Stub = require('./stub');

let vector = new Vector();
console.log(vector.len());
Stub(vector, 'len', 2);
Spy(vector, 'len', [1]);
console.log(vector.len(1));
console.log(vector.len.calledWithExpectedArgs);
console.log(vector.len.counter);
