let Gen = function* (arg) {
    yield 1;
    yield 2;
    yield arg;
    return 5;
}

let gen = Gen(40);

console.log(gen.next(3));
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
