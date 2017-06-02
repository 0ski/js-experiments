const Vector = require('../classes/vector');

function Stub(instance, targetName, returnVar) {
  let handler = {
    apply: function (target, thisArg, argumentsList) {
      return returnVar;
    },
  };

  instance[targetName] = new Proxy(instance[targetName], handler);
}

let vector = new Vector();
console.log(vector.len());
Stub(vector, 'len', 20);
console.log(vector.len());

module.exports = Stub;
