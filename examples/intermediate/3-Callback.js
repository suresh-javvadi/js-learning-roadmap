// Callback function

function a(params) {
  console.log("Hello");
  params();
}

a(function xyz() {
  console.log("I am callback"); // here xyz() is a callback function
});

// call back help to async

setTimeout(function () {
  console.log("Time up");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});
