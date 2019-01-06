const permute = (str, prefix='', cache=[]) => {
  if (str.length === 0) {
    cache.push(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substr(0, i) + str.substr(i + 1);
      permute(rem, prefix + str.charAt(i), cache);
    }
  }

  return cache;
};

let exmp = 'abcd';
console.log(permute(exmp).join('\n'));
