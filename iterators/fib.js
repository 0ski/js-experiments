let fibonacci = {
  [Symbol.iterator]() {
    let previous = 0;
    let current = 1;

    return {
      next() {
        [previous, current] = [current, previous + current];
        return {
          done: false,
          value: current,
        };
      },
    };
  },
};

for (let i of fibonacci) {
  if (i > 55) {
    break;
  }

  console.log(i);
}
