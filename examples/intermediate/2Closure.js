/*// inner function has scope of te outer function

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message, "form the inner function");
  }

  inner();
}

outer();

// Allows to create private variables

function secretHolder() {
  let seceret;
  seceret = "This is private";

  function tellSecret() {
    console.log(seceret);
  }
  tellSecret();
}

secretHolder();

//console.log(seceret); //ReferenceError: seceret is not defined
//seceret = "April fool"; // we cant access private variables from out side

// Allows state maintenance

function createCounter() {
  let count = 0;

  function incremnet() {
    count++;
    console.log(`Count increased to ${count}`);
  }

  function getCount() {
    return count;
  }

  return { incremnet, getCount };
}

const counter = createCounter();

counter.incremnet(); // reseting the value
counter.incremnet();
counter.incremnet();

console.log(counter.count); // it is hidden cant access

console.log(`Current count is ${counter.getCount()}`);

counter.incremnet();

// in loops with var

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }); // 3 3 3
}

// to fix this use let

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000); // 0 1 2
}

// closure with timers, by using closures timers remembers varaible values

function countdown(start) {
  for (let i = 0; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (start - i) * 1000); // Delay increases every loop
  }
}

countdown(3); // the arrow function remembers the 3 after delay

function startTimer(maxTime) {
  let time = 0;

  const timerId = setInterval(() => {
    time++;
    console.log(`${time} seconds`);
    if (time === maxTime) {
      clearInterval(timerId);
      console.log("Time UP");
    }
  }, 1000);
}

let maxTime = 10;
startTimer(maxTime);

// clouser with currying

function multiply(a) {
  function output(b) {
    console.log(a * b);
  }
  return output;
}

const double = multiply(2);
double(5); // 10
multiply(10)(4);
double(3); // 6 inner function remember the 2


// module pattern

function bank() {
  let balance = 1000;

  function deposit(amount) {
    balance += amount;
  }

  function withDraw(amount) {
    if (amount <= balance) {
      balance -= amount;
    }
  }

  function balanceCheck() {
    console.log(`Current balance is ${balance}`);
  }

  return { deposit, withDraw, balanceCheck };
}

const bankAccount = bank();

bankAccount.deposit(100);
bankAccount.withDraw(10);
bankAccount.balanceCheck();

console.log(bankAccount.balance); // undefined cant access directly

console.log(balance); // refrence error
*/

//	Function Factories (using Closures)

function discountCal(percentage) {
  return function (price) {
    return price - (price * percentage) / 100;
  };
}
const diwalisale = discountCal(40); // returns a closure that calculates 40% discount

const NewYearSale = discountCal(30); // returns a function (closure) customized with the given parameter

console.log(`Final price is ${diwalisale(48560)}`); // accssing inner function

console.log(`Final price is ${NewYearSale(1000)}`);
