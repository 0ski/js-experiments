let SEP = () => { console.log('==========') };

let testObject = (
  {
    defaultVariable = 'I\'m default value 1',
    variable, test,
    ...spreadArgs,
  }, obj, ...spread) => {
  console.log('object destructioning from function params:');
  console.log('with default variable:', defaultVariable);
  console.log('standard variables:', variable, test);
  console.log('destructioning with spread operator from arguments:', spreadArgs);
  SEP();

  console.log('arguments spread operator:', spread);
  SEP();

  let { type, defaultVal = 'I\'m default value 2', ...spreadObj } = obj;
  console.log('object destructioning with spread operator:', spreadObj);
  console.log('object destructioning with default value:', defaultVal);
  SEP();

  let { testing, some, /* value ,*/ ...defaultSpreadVal = { /* 'working': true */ } } = spreadObj; //an empty object works fine but the other assigment breaks the app, I guess it's babel's mistake
  console.log('object destructioning with spread operator and a default value as object:', testing, some, value, defaultSpreadVal);
  SEP();
};

testObject({ variable: 1, test: 2, options: 3, test2: 4, },
  { testing: 'spread', type: 'operator', some: 'other', value: true, },
  'hello', 'world');
