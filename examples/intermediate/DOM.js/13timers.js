// setTimeout(() => {
//   console.log("I am lazy");
// }, 2000);

// const delay = (time) => {
//   setTimeout(() => {
//     console.log(`I will print after ${time}`);
//   }, time);
// };

// delay(5000);

// setInterval(() => {
//   console.log("I will print after every 2 seconds");
// }, 2000);

// const intervalId = setInterval(() => {
//   console.log("find me if you can");
// }, 2000);

// clearInterval(intervalId);

// count down example

// let count = 5;

// const id = setInterval(() => {
//   console.log(count);
//   count--;

//   if (count === 0) {
//     console.log("Time Up... 😒");
//     clearInterval(id);
//   }
// }, 1000);

let count = 1;

const timeOutId = setTimeout(() => {
  console.log(count);
  count++;

  if (count > 5) {
    console.log("Time Up... 😒");
    clearTimeout(timeOutId);
  }
}, count * 1000);
