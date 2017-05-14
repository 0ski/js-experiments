class Test {
  constructor() {
    this.test = true;

    let arrow = () => {
      console.log(arguments, this);
    };

    let std = function () {
      console.log(arguments, this);
    };

    console.log('ARROW');
    arrow();
    arrow(1, 2);

    arrow.bind({
      newObj: true,
    })();

    arrow.apply({
      newObj: true,
    }, [1, 2]);

    let boundArrow = Function.prototype.apply.bind(arrow);
    console.log('apply.bind:');
    console.log(boundArrow);
    console.log(typeof boundArrow);
    boundArrow([1, 2, 3]);

    let boundArrow2 = Function.prototype.bind.apply(arrow);
    console.log('bind.apply:');
    console.log(boundArrow2);
    console.log(typeof boundArrow2);
    boundArrow2([1, 2, 3]);

    console.log('STANDARD');
    std();
    std(1, 2);

    std.bind(this)(1, 2);
    std.apply(this, [3, 4]);

    let boundStd = Function.prototype.apply.bind(std);
    console.log('apply.bind:');
    console.log(boundStd);
    console.log(typeof boundStd);
    boundStd([1, 2, 3]);

    let boundStd2 = Function.prototype.apply.bind(std);
    console.log('bind.apply:');
    console.log(boundStd2);
    console.log(typeof boundStd2);
    boundStd2([1, 2, 3]);
  }
}

class Klass {
  constructor() {
    console.log(this, arguments);
  }
}

console.log('TESTING binding');
new Test(1);

console.log('TESTING binding constructor');
console.log('apply.bind:');
let BoundClass = Function.prototype.apply.bind(Klass);
console.log(BoundClass);

//new BoundClass([1, 2, 3]); //error

console.log('bind.apply:');
let BoundClass2 = Function.prototype.bind.apply(Klass);
console.log(BoundClass2);
new BoundClass2([1, 2, 3]);
