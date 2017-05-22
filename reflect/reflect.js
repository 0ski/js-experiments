let target = {};

Object.freeze(target);

try {
  Object.defineProperty(target, 'foo', { value: 'bar' });
  console.log('ok');
} catch (e) {
  console.log('not ok');
}

let out = Reflect.defineProperty(target, 'foo', { value: 'bar' });

if (out) {
  console.log('ok');
} else {
  console.log('not ok');
}

//constructor
class Test {
  constructor(value1, value2) {
    this.test1 = value1;
    this.test2 = value2;
  }
};

console.log(new Test(1, 2));

function constructMyTest(...args) {
  return Reflect.construct(Test, args);
}

let test = constructMyTest(5, 6);

console.log(test);
console.log(test instanceof Test);

Reflect.deleteProperty(test, 'test1');
console.log(test);
