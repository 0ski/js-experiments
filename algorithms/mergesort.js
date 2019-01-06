const msRec = (arr, tmp=[], start=0, stop=arr.length - 1) => {
  let mid = Math.floor((stop + start) / 2);
  let leftIdx = start;
  let rightIdx = mid + 1;
  let idx = start;
  let size = stop - start + 1;

  if (size > 1) {
    msRec(arr, tmp, start, mid);
    msRec(arr, tmp, mid + 1, stop);
  } else {
    return;
  }

  while (leftIdx <= mid && rightIdx <= stop) {
    if (arr[leftIdx] <= arr[rightIdx]) {
      tmp[idx] = arr[leftIdx];
      leftIdx++;
    } else if (arr[leftIdx] > arr[rightIdx]) {
      tmp[idx] = arr[rightIdx];
      rightIdx++;
    }

    idx++;
  }

  while (leftIdx <= mid) {
    tmp[idx] = arr[leftIdx];
    leftIdx++;
    idx++;
  }

  while (rightIdx <= stop) {
    tmp[idx] = arr[rightIdx];
    rightIdx++;
    idx++;
  }

  for (let i = 0; i < size; i++) {
    arr[start + i] = tmp[start + i];
  }

  return arr;
};

let arrs = [
  [7, 6, 5, 4, 3, 2, 1, 0],
  [4, 5, 7, 2, 1, 3, 6],
  [],
  [6, 4, 2, 0, 1, 3, 5, 7, 8, 6, 5, 3, 3, 5],
];

console.log('MS recursive');

for (let arr of arrs) {
  console.log(msRec(Array.from(arr)));
}
