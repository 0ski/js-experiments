let Fibonacci = function* () {
  let previous = 0;
  let current = 1;
  while (true) {
    [previous, current] = [current, previous + current];
    yield current;
  }
};

let fib = Fibonacci();
let fibNum = fib.next().value;

console.log('Fibonacci from generator:');
while (fibNum < 55) {
  fibNum = fib.next().value;
  console.log(fibNum);
}

let fibIter = {
  [Symbol.iterator]: Fibonacci,
};

console.log('Fibonacci iterator from generator:');
for (let i of fibIter) {
  if (i > 55) {
    break;
  }

  console.log(i);
}

console.log('Fibonacci iterator from generator object:');
fib = Fibonacci();
for (let i of fib) {
  if (i > 55) {
    break;
  }

  console.log(i);
}

console.log('Fibonacci iterator from generator object\'s iterator:');
fib = Fibonacci();
for (let i of fib[Symbol.iterator]()) {
  if (i > 55) {
    break;
  }

  console.log(i);
}

console.log(Fibonacci[Symbol.iterator]); //undefined
console.log(fib[Symbol.iterator]); //function iterator

function* firstNFibNumbers(n) {
  let fib = Fibonacci();

  while (n) {
    n--;
    yield fib.next().value;
  }
}

let first10FibNumbers = firstNFibNumbers(10);
console.log('First 10 Fibonacci numbers:');
console.log([...first10FibNumbers]);
