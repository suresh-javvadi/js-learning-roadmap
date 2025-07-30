// Global scope

let globalVar = "Sypder Man";

function findMe() {
  console.log(globalVar, "form function and block");
}

findMe();

console.log(globalVar, "form out side block");

// Shadowing

let globalhero = "RC";
let hero = "MB";

function superhero() {
  let hero = "PK";
  console.log(globalhero, "form function and block");
  console.log(hero, "from inner scope"); // pk will print due to give priority to inner variable
}

superhero();

console.log(hero, "from outer scope");

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
