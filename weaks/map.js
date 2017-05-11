// let map = new Map(); // heap out of memory
let map = new WeakMap();
let i = 0;

setInterval(() => {
  let obj = {};

  obj.arr = {
    strFromArr: (new Array(100 * 1024)).fill((new Array(1024)).
      fill(1).join('')).join(''),
  };

  map.set(obj.arr, 'array' + i++);
  console.log('Heap used:', process.memoryUsage().heapUsed);

  setTimeout(() => {
    delete obj.arr;
  }, 500);
}, 1000);
