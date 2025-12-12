# Closures

**Closure**: Combination of a function **bundled with references to its lexical environment**.

A function has access to:

- Its **own scope**
- **Outer function's scope**
- **Global scope**

```js
function x() {
  var a = 7;

  function y() {
    console.log(a); // y "closes over" variable 'a'
  }

  return y; // Returns closure: function + lexical environment reference
}

var z = x(); // z holds closure
z(); // Still remembers 'a = 7' → Output: 7
```

**Key Point**: When a function is returned, the **closure** (function bundled with reference to its lexical scope) is returned. These are **not garbage collected** even though the outer function has executed.

## Private Variables & State Maintenance (Encapsulation)

Closures create **private variables** (also called **encapsulation** or **data hiding**):

- Inner functions can access them
- **Completely hidden** from outside code
- Enables **data privacy** and controlled access

### Closure Object Pattern (Reusable)

```js
function createCounter() {
let count = 0; // Private

function increment() { // Fixed: "incremnet" → "increment"
count++;
console.log(Count: ${count});
}

function getCount() {
return count;
}

return { increment, getCount };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.count); // undefined (private!)
console.log(counter.getCount()); // 2

// ✅ Reusable - independent instances
const counter2 = createCounter();
counter2.increment(); // 1
counter2.increment(); // 2
```

### Constructor Pattern (More Scalable - OOP Style)

```js
function Counter() {
  let count = 0; // Private

  this.increment = function () {
    // Fixed: "incremnet" → "increment"
    count++;
    console.log(`Count: ${count}`);
  };

  this.getCount = function () {
    return count;
  };
}

const counter1 = new Counter();
counter1.increment(); // 1
counter1.increment(); // 2
console.log(counter1.count); // undefined (private!)
console.log(counter1.getCount()); // 2
```

---

## Closures in Loops (var vs let)

**Problem**: Closures in loops behave differently with `var` vs `let`.

```js
// ❌ PROBLEM with var (function-scoped)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (same i shared)

// ✅ FIXED with let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2 (new i per iteration)
```

- Here `var` is function-scoped (shared across iterations), so all callbacks reference the **same `i`**. By execution time of 1 setTimeout the loop has already completed all its iterations and `i = 3`.
- So `let` creates a **new `i` per iteration** (block-scoped) i is lexically refrence so it has the previous value and do increment.

---

## Closures help timers

Closures help timers by remembering values even after loops/functions finish.

```js
function countdown(start) {
  for (let i = start; i >= 0; i--) {
    setTimeout(() => console.log(i), (start - i) * 1000);
  }
  console.log("Hello"); // Runs immediately
}
countdown(3); // Prints: Hello, 3, 2, 1, 0
```

**How it works:**

- Loop runs SUPER FAST (0.001 seconds)

  - Creates 4 setTimeout callbacks
  - Each "copies" its own i value (3,2,1,0)

- "Hello" prints IMMEDIATELY

- 1 SECOND LATER: Callback #1 runs → prints "3" (remembers its i)

  2 SECONDS: Callback #2 → prints "2"

  3 SECONDS: Callback #3 → prints "1"

  4 SECONDS: Callback #4 → prints "0"

  ***

## Currying with Closures

Currying transforms a function to take **one argument at a time**. Each returned function **remembers** the previous argument via closure.

```js
function multiply(a) {
  return function (b) {
    console.log(a * b);
  };
}
const double = multiply(2);
double(5); // 10
multiply(10)(4); // 40
double(3); // 6 (remembers 2)
```

---

## Function Factories

Factories use closures to create customized functions with "baked-in" parameters.

```js
function discountCal(percentage) {
return function(price) {
return price - (price * percentage) / 100;
};
}

const diwaliSale = discountCal(40);
const newYearSale = discountCal(30); // Fixed: "NewYearSale" → "newYearSale"

console.log(Diwali: ${diwaliSale(48560)});
console.log(New Year: ${newYearSale(1000)});
```

## Closures Disadvantages ⚠️

### **Over Consumption of Memory**

- Variables referenced by closures are **not garbage collected**
- Memory usage grows indefinitely with each closure

```js
function memoryHog() {
  let massiveData = new Array(1000000).fill("data"); // Lives FOREVER!
  return () => console.log("Still holding massiveData...");
}
```

### **Memory Leaks** (Without Proper Handling)

- **Using too many closures** without cleanup = memory leaks
- Common in loops, event listeners, timers

```js
function leakyClosure() {
  let hugeData = new Array(1000000).fill("memory hog"); // Never garbage collected!

  return function () {
    console.log("Closure remembers hugeData forever...");
  };
}

const leak = leakyClosure(); // hugeData lives FOREVER
leak();
leak();
leak(); // Memory usage keeps growing!
```

### **Performance Overhead**

- Extra memory for lexical environment
- Slower variable lookup (scope chain traversal)
- **10-20% slower** than local variables
- **Also freezes the browser**

**Pro Tip**: Always `null` closure references when done:

```js
const closure = createClosure();
closure();
closure = null; // ✅ Allows garbage collection
```
