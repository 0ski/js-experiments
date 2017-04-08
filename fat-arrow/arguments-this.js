var that = {
  context: 'test',
};

var fatArrowGlobal = () => {
  console.log('[fatArrowGlobal] args', arguments.length);
  console.log('[fatArrowGlobal] context ref check', that === this);

  // console.log('[fatArrowGlobal] caller', fatArrowGlobal.caller); //caller is restricted
};

//in browser arguments are not defined (there is no main function)
fatArrowGlobal('test', 'from', 'global');

(function () {
  let fatArrow = () => {
    console.log('[fatArrow] args', arguments); //arguments comes from parent function
    console.log('[fatArrow] context', this);
    console.log('[fatArrow] context ref check', that === this);

    // console.log('[fatArrow] caller', fatArrow.caller); //caller is restricted
    fatArrowGlobal('test', 'from', 'global'); //it counts where it's created
  };

  fatArrow('a', 'second', 'test');
}).bind(that)('a', 'test');
