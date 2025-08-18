// without parameter without return

function greet() {
  console.log("Hello");
}

greet();

// with parameter with return

function user(name) {
  console.log(name);
}

user("Suresh");

// without parameter with return
function role() {
  return "I am a developer";
}

const returnValue = role();
console.log(returnValue);

// with parameter adn with return

function smile(name) {
  return name + " is smiling";
}

console.log(smile("Suresh"));

// shortest function in js

// global space

let a = 10;
function b() {
  let x = 20;
}

// to read global variables

console.log(window.a);
console.log(a); // if nothing is there before, then is automatically refers to the global object
console.log(this.a);
console.log(x); // x is not defined
