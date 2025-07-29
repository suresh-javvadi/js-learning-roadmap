// Primitive data types

//Stored directly in memory
let a = 5;
let b = a; // here a copy of 5 is stored in b
b = 10; // it won't effect the a, a will be 5 only b will change into 10

//Immutable
let name = "Suresh";
name[0] = "R"; // Has no effect, won’t change into Ruresh
console.log(name);

name = "Surya"; // Reassignment allowed
console.log(name);

//Compared and copied by value
let x = 10;
let y = 10;
console.log(x === y); //it is true, its only compare the value no the variables or any other

//Wrapper Objects
let zz = "hello";
let result = zz.toUpperCase();
console.log(result); // 'HELLO'

let pi = 22 / 7;
console.log(pi);
console.log(pi.toFixed(2));

// Non primitive data types
// Store the memory address.
let person1 = { name: "Suresh" };
let person2 = person1;
person2.name = "Ravi"; //when we change the person 2 then person1 also changes.
console.log(person1.name);

// Compared and copied by reference (not value).
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); //false due to different reference or locations.
let arr3 = arr1;
console.log(arr1 === arr3); //true due to same reference or address

// typeof
typeof null; //   "object" (JS bug from early days)
typeof NaN; // "number" (NaN means Not-a-Number, but type is number)
typeof []; // "object" (arrays are objects)
typeof {}; // "object"
typeof function () {}; // "function" (which is a special kind of object)
