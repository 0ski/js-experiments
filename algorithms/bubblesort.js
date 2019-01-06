const bs = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
};

let arrs = [
  [7, 6, 5, 4, 3, 2, 1, 0],
  [4, 5, 7, 2, 1, 3, 6],
  [],
];

for (let arr of arrs) {
  console.log(bs(arr));
}
