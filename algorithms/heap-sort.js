const heapify = (arr, i=0, n=arr.length) => {
  let largest = i;
  let l = i * 2 + 1;
  let r = i * 2 + 2;

  if (l < n && arr[largest] < arr[l]) {
    largest = l;
  }

  if (r < n && arr[largest] < arr[r]) {
    largest = r;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest, n);
  }

  return arr;
};

const createMaxHeap = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i);
  }

  return arr;
};

const sort = arr => {
  createMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, 0, i);
  }

  return arr;
};

let arr = [1, 5, 3, 2, 10, 12, 11, 20, 9, 7];
console.log(sort(arr));
