// var hoisting
console.log(a); // undefined
var a = 5;
console.log(a);

//let & const hoisting
console.log(b); // ReferenceError
let b;

console.log(c);
const c = "Suresh"; // ReferenceError

// Function Declaration (hoisted)
greet();
function greet() {
  console.log("Hello!");
}

// Function Expression (not hoisted as function)
hello(); //TypeError: hello is not a function
var hello = greet();

hi(); //ReferenceError: Cannot access 'hi' before initialization
let hi = greet();

//// Arrow Function (subject to TDZ)
happy(); //ReferenceError
let happy = () => console.log("Happy");
