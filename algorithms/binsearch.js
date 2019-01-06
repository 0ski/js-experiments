const binSearchPos = (arr, val, order='asc') => {
  let start = 0;
  let end = arr.length;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (val === arr[mid]) {
      return mid;
    } else if (val < arr[mid]) {
      if (order === 'asc') {
        end = mid - 1;
      } else if (order === 'desc') {
        start = mid + 1;
      }
    } else if (val > arr[mid]) {
      if (order === 'asc') {
        start = mid + 1;
      } else if (order === 'desc') {
        end = mid - 1;
      }
    } else if (mid === 0 || mid === arr.length) {
      break;
    }
  }

  if (val < arr[mid]) {
    return mid;
  } else if (val > arr[mid]) {
    return Math.min(mid + 1, arr.length);
  }

  return mid;
};

const binSearch = (arr, val, order) => {
  let idx = binSearchPos(arr, val, order);
  if (arr[idx] === val) {
    return idx;
  } else {
    return -1;
  }
};

// let arr1 = [1, 2, 3, 5, 6, 7];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log('Searching in', arr1);
// console.log('Looking position for 1:', binSearchPos(arr1, 1));
// console.log('Looking position for 2:', binSearchPos(arr1, 2));
// console.log('Looking position for 3:', binSearchPos(arr1, 3));
// console.log('Looking position for 4:', binSearchPos(arr1, 4));
// console.log('Looking position for 5:', binSearchPos(arr1, 5));
// console.log('Looking position for 6:', binSearchPos(arr1, 6));
// console.log('Looking position for 7:', binSearchPos(arr1, 7));
// console.log('Looking position for 8:', binSearchPos(arr1, 8));
// console.log('Looking position for 0:', binSearchPos(arr1, 0));
// console.log('Searching in', arr2);
// console.log('Looking position for 1:', binSearchPos(arr2, 1));
// console.log('Looking position for 2:', binSearchPos(arr2, 2));
// console.log('Looking position for 3:', binSearchPos(arr2, 3));
// console.log('Looking position for 4:', binSearchPos(arr2, 4));
// console.log('Looking position for 5:', binSearchPos(arr2, 5));
// console.log('Looking position for 6:', binSearchPos(arr2, 6));
// console.log('Looking position for 7:', binSearchPos(arr2, 7));
// console.log('Looking position for 8:', binSearchPos(arr2, 8));
// console.log('Looking position for 0:', binSearchPos(arr2, 0));
//
// arr1.sort((a, b) => a <= b);
// arr2.sort((a, b) => a <= b);
// console.log('Searching in', arr1);
// console.log('Looking for 1:', binSearch(arr1, 1, 'desc'));
// console.log('Looking for 2:', binSearch(arr1, 2, 'desc'));
// console.log('Looking for 3:', binSearch(arr1, 3, 'desc'));
// console.log('Looking for 4:', binSearch(arr1, 4, 'desc'));
// console.log('Looking for 5:', binSearch(arr1, 5, 'desc'));
// console.log('Looking for 6:', binSearch(arr1, 6, 'desc'));
// console.log('Looking for 7:', binSearch(arr1, 7, 'desc'));
// console.log('Looking for 8:', binSearch(arr1, 8, 'desc'));
// console.log('Looking for 0:', binSearch(arr1, 0, 'desc'));
// console.log('Searching in', arr2);
// console.log('Looking for 1:', binSearch(arr2, 1, 'desc'));
// console.log('Looking for 2:', binSearch(arr2, 2, 'desc'));
// console.log('Looking for 3:', binSearch(arr2, 3, 'desc'));
// console.log('Looking for 4:', binSearch(arr2, 4, 'desc'));
// console.log('Looking for 5:', binSearch(arr2, 5, 'desc'));
// console.log('Looking for 6:', binSearch(arr2, 6, 'desc'));
// console.log('Looking for 7:', binSearch(arr2, 7, 'desc'));
// console.log('Looking for 8:', binSearch(arr2, 8, 'desc'));
// console.log('Looking for 0:', binSearch(arr2, 0, 'desc'));
//
let arr = [1, 2, 3, 5, 6, 7];
console.log('Using position to insert values');
console.log('Using array:', arr);
for (let item of [0, 4, 8, 9, 4, 3, 5, 7, 20, 18, 19, 2, 1, 3]) {
  let pos = Math.max(binSearchPos(arr, item), 0);
  arr.splice(pos, 0, item);
  console.log(`Position: ${pos}, value: ${item}, after insert: ${arr}`);
}

let arr3 = [];
for (let item of [1, 1, 1, 1, 3, 2, 4, 0, 2, 3, -1, 0]) {
  let pos = binSearchPos(arr3, item);
  console.log(pos);
  arr3.splice(pos, 0, item);
  console.log(`Position: ${pos}, value: ${item}, after insert: ${arr3}`);
}

let arr4 = [];
for (let item of [2, 6, 4, 5]) {
  let pos = binSearchPos(arr4, item);
  console.log(pos);
  arr4.splice(pos, 0, item);
  console.log(`Position: ${pos}, value: ${item}, after insert: ${arr4}`);
}
