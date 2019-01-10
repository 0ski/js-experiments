/**
*    The stock span problem is a financial problem where we have a series of n daily price quotes
*  for a stock and we need to calculate span of stock’s price for all n days.
*  The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive
*  days just before the given day, for which the price of the stock on the current day is less than
*  or equal to its price on the given day.
*  Twisted (span of the smallest value):                 {1,   2,  3,  1,  5,  1,  1}
*  Indexes:                                              {0,   1,  2,  3,  4,  5,  6}
*  For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85},
*  then the span values for corresponding 7 days are     {1,   1,  1,  2,  1,  4,  6}
*  (left and right) for all days are                     {7,   5,  1   3,  1,  4,  6}
*/
const {
  Stack,
} = require('./stackqueue');

const getSpansOfPreviousDays = arr => {
  let stack = new Stack();
  let spans = [];

  arr.forEach((price, i) => {
    while (stack.length > 0 && arr[stack.peek()] <= price) {
      stack.pop();
    }

    if (stack.length === 0) {
      spans[i] = i + 1;
    } else {
      spans[i] = i - stack.peek();
    }

    stack.push(i);
  });

  return spans;
};

const getSpansOfBothWays = arr => {
  let spansLeft = getSpansOfPreviousDays(arr);
  let spansRight = getSpansOfPreviousDays(arr.reverse()).reverse();
  let spans = [];

  spansLeft.forEach((span, i) => {
    spans[i] = span + spansRight[i] - 1;
  });

  return spans;
};

const getTwistedSpansOfPreviousDays = arr => {
  let stack = new Stack();
  let spans = [];

  arr.forEach((price, i) => {
    while (stack.length > 0 && arr[stack.peek()] >= price) {
      stack.pop();
    }

    if (stack.length === 0) {
      spans[i] = i + 1;
    } else {
      spans[i] = i - stack.peek();
    }

    stack.push(i);
  });

  return spans;
};

console.log(getTwistedSpansOfPreviousDays([100, 80, 60, 70, 60, 75, 85]));

console.log(getSpansOfPreviousDays([100, 80, 60, 70, 60, 75, 85]));
console.log(getSpansOfBothWays([100, 80, 60, 70, 60, 75, 85]));
