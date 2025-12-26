function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorObj = simpleGenerator();
const generatorObj2 = simpleGenerator();

// console.log(generatorObj);

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj2.next());
console.log(generatorObj.next());
console.log(generatorObj2.next());

//common usecase
// infinite loop

function* genearteId() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

const generatorIdObj = genearteId();

console.log(generatorIdObj.next());
console.log(generatorIdObj.next());
console.log(generatorIdObj.next());
console.log(generatorIdObj.next());

function* genearteIds() {
  let id = 1;

  console.log("Started");

  while (true) {
    console.log("Paused at yield");
    inc = yield id;
    console.log("inc is", inc);
    console.log("id is", id);
    if (inc != null) {
      console.log("used inc");
      4;
      id += inc;
    } else {
      console.log("used else");
      id++;
    }
  }
}

const generatorIdsObj = genearteIds();

console.log(generatorIdsObj.next());
console.log(generatorIdsObj.next());
console.log(generatorIdsObj.next(4));

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

console.log(g.next());
// console.log(g.return("Bye"));
console.log(g.throw(new Error("Oops")));
console.log(g.next());

function* gen() {
  try {
    yield 1;
    yield 2;
  } catch (e) {
    console.log("Caught:", e.message);
  }
  yield 3;
  yield 4;
}

const g2 = gen();

console.log(g2.next());
console.log(g2.next());
console.log(g2.throw(new Error("Oops")));
