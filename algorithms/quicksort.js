const partition = (arr, left, right, pivot) => {
  while (true) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left > right) {
      break;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return left;
};

const qsRec = (arr, left=0, right=arr.length - 1) => {
  if (left >= right) {
    return;
  }

  let pivot = arr[Math.floor((left + right) / 2)];
  let breakingPoint = partition(arr, left, right, pivot);
  qsRec(arr, left, breakingPoint - 1);
  qsRec(arr, breakingPoint, right);

  return arr;
};

const qsSeq = arr => {
  let left = 0;
  let right = arr.length - 1;
  let stack = [];

  if (left < right) {
    stack.push([left, right]);
  }

  while (stack.length) {
    let item = stack.pop();
    [left, right] = item;
    let pivot = arr[Math.floor((left + right) / 2)];
    let breakingPoint = partition(arr, left, right, pivot);

    if (left < breakingPoint - 1) {
      stack.push([left, breakingPoint - 1]);
    }

    if (right > breakingPoint) {
      stack.push([breakingPoint, right]);
    }
  }

  return arr;
};

let arrs = [
  [7, 6, 5, 4, 3, 2, 1, 0],
  [4, 5, 7, 2, 1, 3, 6],
  [],
  [6, 4, 2, 0, 1, 3, 5, 7, 8, 6, 5, 3, 3, 5],
];

console.log('QS recursive');

for (let arr of arrs) {
  console.log(qsRec(Array.from(arr)));
}

console.log('QS sequential');

for (let arr of arrs) {
  console.log(qsSeq(Array.from(arr)));
}
