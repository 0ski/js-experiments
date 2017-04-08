
if (true) {
  var varNumber = 1;
  const constNumber = 2;
  let letNumber = 3;
}

console.log('Var after if block', varNumber);

try {
  console.log(constNumber); //ref error
} catch (e) {
  console.error('Const not available');
}

try {
  console.log(letNumber); //ref error
} catch (e) {
  console.error('Let not available');
}

try {
  var varTryCatchNumber = 1;
  const constTryCatchNumber = 2;
  let letTryCatchNumber = 3;
  throw 'Error';
} catch (e) {
  console.log(e);
  console.log('Var in try-catch block', varTryCatchNumber);

  var varCatchBlockNumber = 1;

  //That appears first because during JS execution
  //JS engine parses blocks, and during runtime we throw 'Error'
  try {
    console.log('Var in try-catch block', constTryCatchNumber);
  } catch (e) {
    console.error('Const not available from catch block');
  }

  try {
    console.log('Var in try-catch block', letTryCatchNumber);
  } catch (e) {
    console.error('Const not available from catch block');
  }
}

console.log('Var after try-catch block', varCatchBlockNumber);
