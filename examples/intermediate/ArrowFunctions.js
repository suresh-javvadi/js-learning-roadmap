// Traditional vs arrow function syntax

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

const adds = (a, b) => a + b;

console.log(adds(2, 3));

// Syntax Variations

const square = (side) => side * side;
console.log(square(4)); // single params

const rectangle = (l, b) => l * b;
console.log(rectangle(10, 5)); // multiple params

const greet = () => "Hello";
console.log(greet()); // no params

const divide = (a, b) => {
  console.log("Dividing started");
  return a / b;
};
console.log("Result is ", divide(10, 4)); // With Curly Braces {} (Explicit return)

// when not to use arrow functions

const person = {
  name: "Suresh",
  greet: () => {
    console.log(`Hello ${this.name}`); // undefined here this wont refers to person
  },
};

person.greet(); // this scope is form  here

// when you wnat dynamic this

const sayHi = () => {
  console.log(this.name);
};

const user = { name: "Suresh" };
const user1 = { name: "Surya" };
sayHi.call(user); // goes undifined
sayHi.call(user1); // goes undifined
