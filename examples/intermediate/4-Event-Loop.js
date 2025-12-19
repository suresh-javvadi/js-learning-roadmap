// setTimeout
console.log("Start");

setTimeout(function cb() {
  console.log("Call back");
}, 5000);

console.log("End");

// DOM API

console.log("Start");

document.getElementById("btn").addEventListener("click", function dcb() {
  console.log("Button clicked");
});

console.log("End");

// fecth

console.log("Start");

fetch("https://api.example.com").then(function cbf() {
  console.log("Data logged");
});

console.log("End");

// Callback queue vs Micro task queue

console.log("Start");

setTimeout(function cbt() {
  console.log("Call back timeout");
}, 5000);

fetch("https://api.example.com").then(function cbf() {
  console.log("Data logged");
});

console.log("End");
