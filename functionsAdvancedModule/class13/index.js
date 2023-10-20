// generator functions -> The function* declaration creates a binding(association of an identifier with a value) of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances

function* generator1(i) {
  yield i;
  yield i;
  yield i + i;
}

// generators associated with others generators

function* generator2(i) {
  yield* generator1(1);
  yield (i - 1) + (i - 2);
  yield (i) + (i - 1);
  yield (i) + (i + 2);
}

const g2 = generator2(3);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// passing arguments into generators

function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise


// return statement in a generator 

function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const genReturn = yieldAndReturn();
console.log(genReturn.next()); // { value: "Y", done: false }
console.log(genReturn.next()); // { value: "R", done: true }
console.log(genReturn.next()); // { value: undefined, done: true }

// generator as an object method

class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const genFoo = f.generator();

console.log(genFoo.next()); // { value: 1, done: false }
console.log(genFoo.next()); // { value: 2, done: false }
console.log(genFoo.next()); // { value: 3, done: false }
console.log(genFoo.next()); // { value: undefined, done: true }

// Generator that yield numbers 0-10(inclusive)

function* counter(){
  let i;
  for (i=0; i<=10; i++){
    yield i;
  }
}

const counterGen = counter();
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);
console.log(counterGen.next().value);