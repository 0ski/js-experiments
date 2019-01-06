let sum = (a, b) => {
  let c = a ^ b;
  let d = a & b;
  while (d != 0) {
    d = d << 1;
    a = c ^ d;
    d = c & d;
    c = a;
  }

  return c;
};

console.log(sum(5, 6));
console.log(sum(-5, 6));
console.log(sum(5, -6));
console.log(sum(3, 5));
console.log(sum(-8, 8));
console.log(sum(-5, -6));
