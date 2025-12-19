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

// Timer may not execute on time

console.log("Start");

setTimeout(function cbb() {
  console.log("Call back now");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
