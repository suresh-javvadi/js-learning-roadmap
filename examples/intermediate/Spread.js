// array expansion

const nums = [1, 2, 3];

const moreNums = [...nums, 4, 5];

console.log(moreNums); // the orginal will wont change

// object expansion

const user = { name: "Suresh", Role: "Developer" };

const updateUser = { ...user, city: "Hyd" };

console.log(updateUser);

// shallow copy

const original = [10, 20];
const copy = [...original];

console.log(copy);

const originalObj = { a: 1 };
const copyObj = { ...originalObj };

console.log(originalObj);

// Merging arrays

const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];

console.log(merged);

// Merging objects

const x = { a: 1 };
const y = { b: 2 };

const mergedObj = { ...x, ...y };

console.log(mergedObj);

//Spreading in function calls

const numbers = [10, 20, 33, 30];

console.log(Math.max(...numbers));

// Edge Case: Shallow copy ≠ Deep copy

const obj = { a: 1, nested: { x: 100 } };
const copy1 = { ...obj };

copy1.nested.x = 999;
console.log(obj.nested.x); // ⚠️ 999 — still changed!

// Only top-level is copied; nested objects are still referenced
