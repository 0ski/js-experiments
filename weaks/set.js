// let set = new Set(); // heap out of memory
let set = new WeakSet();

setInterval(() => {
  let obj = {};

  obj.arr = {
    strFromArr: (new Array(100 * 1024)).fill((new Array(1024)).
      fill(1).join('')).join(''),
  };

  set.add(obj.arr);
  console.log('Heap used:', process.memoryUsage().heapUsed);

  setTimeout(() => {
    delete obj.arr;
  }, 500);
}, 1000);

//For browser:
// let set = new WeakSet();
// setInterval(() => {
//   let tempObj = {
//     bool: true,
//     obj: {
//       test: 'hello world',
//     },
//   };
//
//   delete tempObj.obj;
//
//   tempObj.arr = {
//     strFromArr: (new Array(100 * 1024)).fill((new Array(1024)).
//       fill(1).join('')).join(''),
//   };
//
//   set.add(tempObj.arr);
//
//   setTimeout(() => {
//     delete tempObj.arr;
//   }, 500);
// }, 1000);


// Overflow:
// let set = new Set();
// setInterval(() => {
//   let tempObj = {
//     bool: true,
//     obj: {
//       test: 'hello world',
//     },
//   };
//
//   delete tempObj.obj;
//
//   tempObj.arr = {
//     strFromArr: (new Array(100 * 1024)).fill((new Array(1024)).
//       fill(1).join('')).join(''),
//   };
//
//   set.add(tempObj.arr);
//
//   setTimeout(() => {
//     delete tempObj.arr;
//   }, 500);
// }, 1000);
