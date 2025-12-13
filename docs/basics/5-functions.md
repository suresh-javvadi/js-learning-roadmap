# Functions in JavaScript

**Functions** are blocks of code used to perform a specific task.

To declare a function, use the `function` keyword followed by the **function name**, parentheses `()`, and curly braces `{}` containing the function body.

```js
function funName() {
  console.log("Hello");
}
```

JavaScript will only execute the code inside a function when the function is **invoked (called):**

```js
funName();
```

---

## Function Parameters and Arguments

- Functions can take **parameters** (inputs) to receive values during invocation.
- The values passed into a function when invoked are called **arguments**.
- Functions can also return a value back to the calling location using the `return` keyword.

---

## Types of Functions (based on parameters and return values)

### 1. Function without parameter and without return

```js
function greet() {
  console.log("Hello");
}
```

### 2. Function with parameter and without return

```js
function user(name) {
  console.log(name);
}

user("Suresh");
```

### 3. Function without parameter and with return

```js
function role() {
  return "I am a developer";
}

const returnValue = role();
console.log(returnValue);
```

### 4. Function with parameter and with return

```js
function smile(name) {
  return name + " is smiling";
}

console.log(smile("Suresh"));
```

---

## Function Execution Process

1. **Memory Allocation Phase**  
   Functions declared with the `function` keyword are stored in memory. JS allocates memory to store the entire function body

2. **Execution Phase**  
   When a function is executed, a **new execution context** is created in the execution thread.

## Shortest Function in JavaScript

- A empty js file is the shortest function
- Even if a **JavaScript file is empty**, the engine still creates a **Global Execution Context (GEC)**.
- When ever Execution context is created JS will create **Global Object** and **this** (Even for functional EC's)

---

## Global Object

- In browsers, the JS engine automatically creates a **global object** called `window`.
- The `window` object provides many built-in functions and properties that can be accessed anywhere in JS.

```js
// In browser console run
window;
```

---

## `this` Keyword at Global Level

- JavaScript also creates a special variable: **`this`**.
- In browsers, at the global scope: this reference to global object or window

```js
this === window; // true
```

---

## Global Space

- **Global space**: anything that is **not inside a function**.
- All variables and functions declared in the global space eventually become **properties of the global object (window in browsers)**.

Example:

```js
let a = 10;

function b() {
  let x = 20;
}
```

---

## Accessing Global Variables and Functions

```js
console.log(window.a); // 10
console.log(a); // 10 (refers to global space automatically)
console.log(this.a); // 10 (this refers to window object globally)

console.log(x); // Error: x is not defined (because it's local to function b)
```

---

## Key Points

1. The **Global Execution Context (GEC)** is always created, even if the JS file is empty.
2. The JS engine creates a **global object (`window` in browsers)**.
3. The `this` keyword in the global scope refers to the global object.
4. Variables and functions declared outside of any function are attached to the global object.

---

## Function Statement (Function Declaration)

**Definition**: Writing a function with the `function` keyword. This is also called **function declaration**.

**Characteristics**:

- **Fully hoisted** - can be called before declaration
- Available in global scope
- Named function

```js
function a() {
  console.log("a called");
}
a(); // ✅ Works (hoisted fully)
```

**Key**: **Fully hoisted** - can call before declaration.

---

## Anonymous Function

**Definition**: Function **without a name**.

**Important**: Cannot stand alone - causes **syntax error**.

```js
// ❌ Syntax Error!
function () {
console.log("anonymous");
}
// Error: Function statement requires a name
```

**Usage**: Always assigned to variables or passed as callbacks.

---

## Function Expression

**Definition**: Anonymous function **assigned to a variable**.

**Key Rule**: Functions assigned to variables are treated as **variables during hoisting**.

```js
var b = function () {
  console.log("b called");
};
b(); // ✅ Works after assignment
```

**Hoisting Behavior**:

```js
console.log(b); // undefined (variable hoisted, function not yet)
b(); // TypeError!
var b = function () {
  console.log("b called");
};
```

- **Difference from Function Statement**: Only **variable declaration** hoisted, not the function body.

---

## Named Function Expression

**Definition**: **Named function assigned to a variable**.

```js
var c = function xy() {
  console.log("Hello");
  console.log(xy); // ✅ xy accessible INSIDE the function
};
c(); // ✅ Works via variable name

// ❌ ReferenceError!
xy(); // xy not in global scope
```

- Reference error due to function not in the global scope, it is created like local variable

**Name Scope**: `xy` exists only **inside the function** (useful for recursion/debugging).

```js
var c = function xy() {
  console.log("Hello from", xy.name); // "Hello from xy"
  console.log(xy === c); // true (same function)
};
c();
```

---

## First-Class Functions

**Definition**: JavaScript treats functions as **first-class citizens** - they can be:

- Assigned to **variables**
- Passed as **arguments** to other functions
- **Returned** from functions

```js
// 1. Assigned to variables
var zz = function yy(params) {
  console.log(params);
};

// 2. Passed as arguments
zz(function () {}); // Anonymous function as argument
zz(xyz); // Named function as argument

// 3. Returned from functions
function xyz() {
  return function () {
    console.log("Returned function!");
  };
}

const returnedFn = xyz();
returnedFn(); // Works!
```
