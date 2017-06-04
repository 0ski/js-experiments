let variable = 'hello';

function test() {
  return 'This is a test function';
}

let obj = {
  test: true,
  inspect() {
    return 'Inspecting the object';
  },

  toString() {
    return 'Casted object to string';
  },
};

console.log(
  String.raw({
    raw: ['First part', 'Second part'],
  }, '\nInjected string\n')
);

console.log(
  String.raw({
    raw: ['First part', 'Second part', ''],
  }, '\nInjected string\n', `A template ${variable}`)
);

console.log(obj); //Inspecting
console.log(obj + ''); //Casting

let fromTemplate = String.raw` //that is not a comment
  \\n is used for a new line
  But here, I can just create new line
  \${variable} prints ${variable}
  I can also perform some logic:
  \${3*4} = ${3 * 4}
  Or call a function:
  \${test()} = ${test()}
  \${obj} = ${obj}
  \${obj.test} = ${obj.test}
  is taking 'toString' method to cast the object to string
`;

function pure() {
  console.log(arguments);
}

function translate(ln) {
  if (ln.indexOf('polish') > -1) {
    return function (raw, ...substitutions) {
      substitutions = substitutions.map(sub => sub === 'hello' ? 'witaj' : sub);
      return String.raw(raw, substitutions);
    };
  } else {
    return String.raw;
  }
}

console.log(fromTemplate);

pure`
  \${variable} prints ${variable}
`;
console.log('Is interpreted into:');
console.log(`
  \${variable} prints ${variable}
`);

console.log('Checking usage:');
console.log(translate('to polish')`Testing ${variable}`);
console.log(translate('to german')`Testing ${variable}`);
