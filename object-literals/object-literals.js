const util = require('util');
const inspect = util.inspect.custom;

let testString = 'Hello';
let dynamic = 'DynamicProp';

let proto = {
  test: function () {
    return ' test ';
  },

  toString: function () {
    return this.test();
  },
};

let obj = {
  __proto__: proto,
  toString() {
    return this.testString + super.toString() + this[dynamic];
  },

  testString,
  [dynamic]: 14,
  [inspect]: function () {
    return 'Hello world!';
  },
};

console.log(obj.toString());
console.log(obj);
console.log(obj.__proto__);
