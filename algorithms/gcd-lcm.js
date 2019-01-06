const gcd = (a, b) => {
  if (a < b) {
    [a, b] = [b, a];
  }

  let rest = a % b;
  while (rest !== 0) {
    [a, b] = [b, rest];
    rest = a % b;
  }

  return b;
};

const lcm = (a, b) => (a * b) / gcd(a, b);
const lcmArr = (arr) => {
  if (arr.length < 2) return arr[0];
  let cpy = Array.from(arr);
  let i = 0;

  for (i = 0; i < cpy.length - 1; i++) {
    cpy[i + 1] = lcm(cpy[i], cpy[i + 1]);
  }

  return cpy[i];
};

let arr = [5, 6, 7, 12, 6 * 5, 5 * 6 * 7];
arr.forEach(a =>
  arr.forEach(
    b => {
      a !== b ? console.log(`GCD of ${a} and ${b} is ${gcd(a, b)}`) : undefined;
      a !== b ? console.log(`LCM of ${a} and ${b} is ${lcm(a, b)}`) : undefined;
    }
  )
);

console.log(`LCM from ${arr.join(' ')} equals to ${lcmArr(arr)}`);
