// Array Declaration

// Using array literal
let user = ["Suresh", "Developer", "Hyd"];

console.log(user);

// Using the Array constructor
let user2 = new Array("Suresh", "Developer", "hyd");

console.log(user2);

// Heterogeneous

const smile = [1, 5, "Suresh", { role: "developer" }];

console.log(smile.length);

// accessing array elememts

console.log(smile[2]); // logs element of 2nd index
console.log(smile[smile.length - 1]); // for the last element

const mine = ["Suresh", "Developer", "Hyd", { experience: 1 }];

// changing element value

console.log("Initial declared array", mine);
mine[0] = "Surya";

console.log("After modifying", mine);

//Adding Elements

mine.push(100);
console.log(mine);

mine.unshift("Javavdi");
console.log(mine);

// removeing elements

mine.pop();
console.log(mine);

mine.shift();
console.log(mine);

// forEach

["Suresh", "surya", "Sj"].forEach((element) => {
  console.log(element);
});

let arr = [1, 2, 3, 4, 5];

let arrMap = arr.map((e) => e * 2);
console.log(arrMap);

let arrFilter = arr.filter((x) => x > 2);
console.log(arrFilter);

let arrFind = arr.find((f) => f > 3);
console.log(arrFind);

let arrSliceFull = arr.slice(); // full array copy
console.log(arrSliceFull);
let arrSlice = arr.slice(1, 3); // from index - to index
console.log(arrSlice);

let arr1 = ["Banana", "Orange", "Apple"];
let arrSplice = arr1.splice(1, 2, "Kiwi");
console.log(arr1);

let arrConcat = arr.concat(arr1);
console.log(arrConcat);

let arrJoin = arr.join("--");
console.log(arrJoin);

let arrEvery = arr.every((x) => x >= 2);
console.log(arrEvery);

let arrSome = arr.some((x) => x >= 2);
console.log(arrSome);

let arrReduce = arr.reduce((acc, currvalue) => acc + currvalue, 0);
console.log(arrReduce);

const result = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(`Accumulator: ${accumulator}`);
  console.log(`Current Value: ${currentValue}`);
  console.log(`Current Index: ${currentIndex}`);
  console.log(`Original Array: [${array}]`);

  return accumulator + currentValue;
}, 0);

console.log("Final Result:", result);

let arrNested = [1, 2, [3, 4, [5, 6]], 7];
let arrFlat = arrNested.flat();
console.log(arrFlat);
let arrflatDepth = arrNested.flat(2);
console.log(arrflatDepth);

const phrases = ["hello world", "I am a developer"];
const words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words);

const expanded = arr.flatMap((n) => [n, n * 2]);
console.log(expanded);

const evensOrEmpty = arr.flatMap((n) => (n % 2 === 0 ? [n] : []));
console.log(evensOrEmpty);

const fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("mango"));

console.log(fruits.includes("banana"));
console.log(fruits.includes("mango"));
