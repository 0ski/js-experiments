console.log('Defining symbols', Symbol('test') === Symbol('test'));
console.log('Defining symbols in the symbol global registry',
  Symbol.for('test') === Symbol.for('test'));

console.log(Symbol.prototype);
console.log(Symbol.length);
console.log(Symbol('test')[Symbol.toPrimitive]());
console.log(Symbol('test'));
console.log(Symbol.toPrimitive);
