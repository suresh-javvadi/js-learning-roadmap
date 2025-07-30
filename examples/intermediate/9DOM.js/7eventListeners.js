const myBtn = document.getElementById("myBtn");
const btn = document.getElementById("btn");
const splBtn = document.getElementById("splBtn");

// add event listener by anonymous function

myBtn.addEventListener("click", () => alert("yes come on"));
myBtn.removeEventListener("click", () => alert("yes come on"));

// add event listener by named function

function greet() {
  console.log("Hello!");
  alert("Hello");
}

btn.addEventListener("click", greet);

// remove evnet listener
btn.removeEventListener("click", greet); // function use named function

//  add event listener by function wit parameter

function alertGreet(name) {
  console.log(`Hello ${name}`);
  alert(`Hello ${name}`);
}

splBtn.addEventListener("click", () => alertGreet("Suresh")); // you must use anonymous function

const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", (e) => {
  console.log("event", e);
  console.log("Target element", e.target);
});

// preventDefault()

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops defaly submit
  console.log("Form submitted");
});

const myLink = document.getElementById("myLink");

myLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link clicked, but not");
});

// event propagation

// by defalut bubble up

// document.getElementById("outerDiv").addEventListener("click", () => {
//   console.log("Outer Div Clicked");
// });

// document.getElementById("innerBtn").addEventListener("click", () => {
//   console.log("Inner Button Clicked");
// });

// in enable capture add third argument true

// document.getElementById("outerDiv").addEventListener(
//   "click",
//   () => {
//     console.log("Outer Div Clicked");
//   },
//   true
// );

// document.getElementById("innerBtn").addEventListener("click", (e) => {
//   console.log("Inner Button Clicked");
// });

// stop the event from moving to other elements

document.getElementById("innerBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner Button Clicked");
});
