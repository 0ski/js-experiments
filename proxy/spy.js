const Vector = require('../classes/vector');

function Spy(instance, targetName, expectedArgs) {
  let handler = {
    apply: function (target, thisArg, argumentsList) {
      instance[targetName].counter++;
      instance[targetName].calledWithExpectedArgs =
        argumentsList.join('') === expectedArgs.join('');
      return Reflect.apply(target, thisArg, argumentsList);
    },
  };

  instance[targetName] = new Proxy(instance[targetName], handler);
  instance[targetName].counter = 0;
}

let vector = new Vector();
Spy(vector, 'len', ['a', 1]);
console.log(vector.len.counter);
console.log(vector.len('a', 1));
console.log(vector.len.counter);
console.log(vector.len.calledWithExpectedArgs);
console.log(vector.len());
console.log(vector.len.counter);
console.log(vector.len.calledWithExpectedArgs);

module.exports = Spy;
