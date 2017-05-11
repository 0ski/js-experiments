let test = (a, b, c=10, ...d) => {
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
  console.log('d:', d);
};

test(1, 2, 3, 4, 5, 6); // log:
// a: 1
// b: 2
// c: 3
// d: [4,5,6]

test(1, 2); // log:
// a: 1
// b: 2
// c: 10
// d: []

test(...[1, 2, 3, 4]); // log:
// a: 1
// b: 2
// c: 3
// d: [4]

test(1, 2, 3, [4]); // log:
// a: 1
// b: 2
// c: 3
// d: [[4]]
