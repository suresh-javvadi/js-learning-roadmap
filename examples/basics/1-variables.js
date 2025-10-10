//Variable Scope

let name = "Suresh";
function greet() {
  name = "Surya";
  console.log(name); // shadowing problem
}

// Variable Declaration
let a;
var b;

console.log(a); // undefined - 'a' is declared but not assigned yet

// Variable Assignment
a = 10;
b = 20;

// Variable Initialization (declaration + assignment)
let x = 100;
const y = 200;
var z = 20;

// let

let count = 1;

{
  let name = "Suresh";
  name = "Surya";
  // let name = "Happy"; // cannot redeclared in same scope
}

console.log(count); // accessible becuase global state
console.log(name); // ReferenceError because block scope

// const

{
  const pi = 3.14;
  pi = 100; // cannot reassign
  // const pi = 22/7 cannot redeclered
}

// const country;
const country = "India";
console.log(country);
console.log(pi); // ReferenceError because block scope

const person = { name: "Alice" };
person.name = "Bob"; // Allowed: modifying property

// person = {}; // Error: cannot reassign the whole object

// var is function-scoped

function user() {
  var name = "Suresh";
  name = "Surya";
  var name = "Happy"; // allowed
  console.log(name); // "Suresh" - accessible inside function
}

user();

console.log(name); // ReferenceError because function scoped

// undefined

let zz;
console.log(zz);

let yy = null;
console.log(yy); // null

// Undefined vs Not defined

var u;
console.log(u); // undefined is allocated to the variable until value assigned
u = 10;
console.log(u); // 10 will replaced here

console.log(n); // n is not there in the global object so it throws not defined

// Dynamic typing

let data = 42; // number
data = "Hello"; // string - allowed
data = true; // boolean - also allowed
