// var hoisting
console.log(a); // undefined
var a = 5;
console.log(a);

//let & const hoisting
console.log(b); // ReferenceError
let b;

console.log(c);
const c = "Suresh"; // ReferenceError

var mx = 7; // put debug here then you wil see the variable as undefined, function def

function mine() {
  console.log("Mine");
}

mine();
console.log(mx);
console.log(mine);

// here also function executed due to global memory has its def so
// Function Declaration (hoisted)
mine();
console.log(zx); // undefined, initial place holder
console.log(mine);

var zx = 7;

function mine() {
  console.log("Mine");
}

// Function Expression (not hoisted as function)
hello(); //TypeError: hello is not a function, Because here initially hello is also undefined
var hello = greet();

hi(); //ReferenceError: Cannot access 'hi' before initialization
let hi = greet();

// Arrow Function (subject to TDZ)
happy(); //ReferenceError
let happy = () => console.log("Happy");
