const knapSack = (W, arr, idx=arr.length) => {
  if (idx === 0 || W == 0) {
    return 0;
  }

  return Math.max(
    arr[idx - 1].val + knapSack(W - arr[idx - 1].weight, arr, idx - 1), //use it
    knapSack(W, arr, idx - 1) //skip it
  );
};

arr = [
  { val: 60, weight: 10 },
  { val: 100, weight: 20 },
  { val: 120, weight: 30 },
];

console.log(knapSack(50, arr));
console.log(knapSack(30, arr));

const knapSack2 = (W, arr, idx=arr.length, val=0) => {
  if (idx === 0 || W == 0) {
    return val;
  }

  let one = knapSack2(W - arr[idx - 1].weight, arr, idx - 1, val + arr[idx - 1].val); //use
  let two = knapSack2(W, arr, idx - 1, val); //skip

  return Math.max(
    one, two
  );
};

console.log(knapSack2(50, arr));
console.log(knapSack2(30, arr));
