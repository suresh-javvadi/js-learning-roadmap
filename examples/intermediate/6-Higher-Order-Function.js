function x() {
  console.log("x");
}

function y(x) {
  // y is higher order function
  x();
}

const radius = [3, 2, 4, 1];

const calculateArea = function (radius) {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    let area = Math.PI * radius[i] * radius[i];
    output.push(area);
  }

  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    let circum = 2 * Math.PI * radius[i];
    output.push(circum);
  }

  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    let circum = 2 * radius[i];
    output.push(circum);
  }

  return output;
};

console.log(calculateDiameter(radius));

// above all code not a modula there is much redundancy

const calculate = function (arr, logic) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
};

const area = function (r) {
  return Math.PI * r * r;
};

console.log(calculate(radius, area));

const circumference = function (r) {
  return 2 * Math.PI * r;
};

console.log(calculate(radius, circumference));

const diameter = function (r) {
  return 2 * r;
};

console.log(calculate(radius, diameter));

const mapResult = radius.map(area);

console.log(mapResult);
