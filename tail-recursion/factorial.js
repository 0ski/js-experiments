//node --harmony --use_strict factorial.js
const factorialArrow = (n, acumulator = 1) =>
  n <= 1 ? acumulator : factorialArrow(n - 1, n * acumulator);

console.log(factorialArrow(100000));

const factorial = function (n, acumulator = 1) {
  if (n <= 1) {
    return acumulator;
  }

  return factorial(n - 1, n * acumulator);
};

console.log(factorial(100000));
