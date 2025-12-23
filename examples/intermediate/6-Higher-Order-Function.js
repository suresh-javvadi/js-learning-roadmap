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

// Predefined higher order functions

// map()

const arr = [5, 2, 3, 7, 9];

const double = function (num) {
  return num * 2;
};

console.log("Double", arr.map(double));

console.log(
  "Triple",
  arr.map(function (num) {
    return num * 3;
  })
);

console.log(
  "Binary",
  arr.map((x) => x.toString(2))
);

//filter

console.log(
  "odd numbers",
  arr.filter((x) => x % 2)
);

console.log(
  "even numbers",
  arr.filter(function (x) {
    return x % 2 === 0;
  })
);

// reduce

const sum = arr.reduce(function (acc, curr) {
  return (acc = curr + acc);
});

console.log("Sum", sum);

console.log(
  "max",
  arr.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0)
);

const users = [
  { firstName: "Suresh", lastName: "Javvadi", age: 24 },
  { firstName: "Pawan", lastName: "kalyan", age: 53 },
  { firstName: "Rithu", lastName: "Verma", age: 28 },
  { firstName: "Kiran", lastName: "Reddy", age: 28 },
  { firstName: "Neha", lastName: "Singh", age: 25 },
];

// map(): list all the full names

const fullNames = users.map((name) => name.firstName + " " + name.lastName);

console.log(fullNames);

// reduce(): list same age count

const ageCount = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log("Age counts", ageCount);
