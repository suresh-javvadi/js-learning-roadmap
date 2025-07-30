// In Array Destructuring

const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(rest);

//  In Function Parameters (for unknown number of args)

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(2, 3, 4, 5));

// In Object Destructuring

const { name, ...otherDetails } = {
  name: "Suresh",
  role: "Developer",
  city: "Hyd",
};

console.log(name);
console.log(otherDetails);

// ...args (Rest Parameter) gives Real Array

function showAll(...args) {
  console.log(args);
  console.log(Array.isArray(args));
}

showAll(1, 2, 3, 4, 5);

// arguments buid in object

function showargs() {
  console.log(arguments);
}

showargs(1, 2, 456, 734, 3, 4);

// you can covert

function convertToArgs() {
  console.log(...arguments);
  console.log(Array.from(arguments));
}

convertToArgs(1, 2, 456, 734, 3, 4);
