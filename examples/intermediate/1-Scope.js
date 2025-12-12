// Global scope

let globalVar = "Sypder Man";

function findMe() {
  console.log(globalVar, "form function and block");
}

findMe();

console.log(globalVar, "form out side block");

// Functional scope

function ironMan() {
  let funVar = "Iron Man";
  console.log(funVar, "from function");
}

ironMan();

// console.log(funVar, "from outside function"); //ReferenceError: funVar is not defined

// Block scope

{
  var a = 10;
  let b = 20;
  const c = "haha";
}

console.log(a); // var is not block scope
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

// Shadowing

let globalhero = "RC";
let hero = "MB";

{
  let hero = "PB"; // Block scope shadows outer 'hero'
  console.log(hero, "from the block"); // "PB from the block"
}

function superhero() {
  let hero = "PK"; // Function scope shadows outer 'hero'
  console.log(globalhero, "form function and block"); // "RC form function and block"
  console.log(hero, "from inner scope"); // "PK from inner scope"
}

superhero();

console.log(hero, "from outer scope"); // "MB from outer scope"

let b = 100;

{
  let a = 10;
  let b = 100;
  let c = 1000;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(b);

// illegal shadowing
let ac = 10;
{
  // var ac = 100; // error due to scope bounadaries
}

// Lexcical scope

function outer() {
  let a = 100;
  function inner() {
    console.log(a); // ✅ inner() can access a from outer()
  }
  inner();
}

outer();

function parent() {
  let father = "Krishna";
  function child() {
    let son = "Mahesh babu";
    console.log(`${son} father is ${father}`);
  }
  return child;
}

const res = parent();
res(); // here calliing outside the parent but accessing the values form where it is defined

// Scope Chain

function a() {
  // Lexical parent scope
  var b = 10;

  function c() {
    // Child function (lexical child of 'a')
    console.log(b); // Accesses 'b' from lexical parent 'a'
  }
  c(); // Output: 10
}

a();
// due do scope chan c has the access to all scopes (a, global)
