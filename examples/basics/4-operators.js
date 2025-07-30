// Arithmetic operators

// Addition
console.log(5 + 3);

// Subtraction
console.log(5 - 3);

// Multiplication
console.log(5 * 3);

// Division
console.log(6 / 3);

// Modulus
console.log(5 % 2);

// Exponentiation
console.log(2 ** 3);

// Floating point precision:

console.log(0.1 + 0.2 == 0.3); //  due to binary floating point.
console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2) == 0.3);

// Exponentiation
console.log(2 ** (3 ** 2));

// Modulus
console.log(-101 % 10);

// Unary operators

// post increment / decrement
let x = 1;
console.log(x++);
console.log(x);

let xx = 1;
console.log(xx--);
console.log(xx);

// pre increment / decrement
let y = 1;
console.log(++y);
console.log(y);

let yy = 1;
console.log(--yy);
console.log(yy);

// String concatenation
let firstName = "Suresh";
let lastName = "Surya";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Template literals
let greeting = `Hello, ${firstName} ${lastName}!`;

// Assignment Operators

// cannot use compound assignment
// let xa += 10; // Syntax Error

// chain assignment
x = y = z = 100;
console.log(x, y, z);

// assignment expressions
let total = (x = 5) + 10;
console.log(total);

// non primitive data types compare
console.log([] == []);
let a = [];
let b = a;
console.log(a === b);
