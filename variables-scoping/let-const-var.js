
if (true) {
  var varNumber = 1;
  const constNumber = 2;
  let letNumber = 3;
}

console.log(varNumber);
try {
  console.log(constNumber); //ref error
} catch (e) {
  console.error(e);
}

try {
  console.log(letNumber); //ref error
} catch (e) {
  console.error(e);
}
