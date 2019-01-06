const fact = (n, val=1) => {
  if (n <= 1) return val;
  return fact(n - 1, val * n);
};

console.log(fact(0));
console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
