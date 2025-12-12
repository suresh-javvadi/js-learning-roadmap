# JavaScript Hoisting

## What is Hoisting?

**Hoisting** is JavaScript's behavior of **moving variable and function declarations to the top of their scope** (function or global) before code execution.

**Technical view:** The engine **allocates memory** for these declarations during the creation phase, while initializations stay in place.

### Visual Example

```js
console.log(x); // undefined (declaration hoisted)
var x = 5; // initialization stays here

// Mentally becomes:
var x; // ← Declaration moved to top
console.log(x);
x = 5; // ← Value assignment stays
```

This allows you to use certain variables and functions before their actual declaration lines—**but with important exceptions and limitations**.

---

## How Hoisting Works with Variables

All variable **declarations** are hoisted; JavaScript allocates memory for them during the creation phase, but their initial values are **not** hoisted.

### `var` Declarations

- Stored in function/global scope
- Accessible before declaration with value `undefined`

```js
console.log(aa); // undefined
var aa = 10;
console.log(bb); // ReferenceError (not in scope yet)
var bb = 100;
console.log(window.aa); // undefined (let/const not in global)
```

### `let` and `const` Declarations

- Stored in a **separate environment** (block scope)
- Cannot be accessed before declaration (in **Temporal Dead Zone**)
- Accessing before declaration throws **ReferenceError** because they are in the **Temporal Dead Zone (TDZ)**

  **Example:** (../examples/basics/2-hoisting.js)

---

## Temporal Dead Zone (TDZ)

- The **TDZ** is the phase between entering a scope/block and the `let`/`const` declaration line
- Variable exists in memory but is **not accessible**
- Any reference to the variable before the declaration results in a **ReferenceError**.
- TDZ **Prevents accidental early usage**, making code more predictable

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

---

## Hoisting with Functions

### Function Declarations (Fully Hoisted)

- **Function declarations** (using the `function` keyword) are **fully hoisted**. You can call them before their declaration in the code.

```js
greet(); // Works! ✅

function greet() {
  console.log("Hello from hoisted function");
}
```

### Function Expressions & Arrow Functions (Not Fully Hoisted)

- **Function expressions** and **arrow functions** are not fully hoisted—they behave like variables and are subject to TDZ rules.

```js
sayHi(); // TypeError/ReferenceError ❌

const sayHi = function () {
  console.log("Hi");
};

// Or with arrow function:
hello(); // ReferenceError
const hello = () => console.log("Hello");
```

**Example:** (../examples/basics/2-hoisting.js)

---

## Hoisting Rules Summary

| Type           | Hoisted? | Value After Hoist  | Can Use Before Decl?  |
| -------------- | -------- | ------------------ | --------------------- |
| `var`          | ✅ Yes   | `undefined`        | Yes (value undefined) |
| `let`/`const`  | ✅ Yes   | Temporal Dead Zone | No (ReferenceError)   |
| Function Decl. | ✅ Fully | Complete function  | Yes ✅                |
| Function Expr. | ❌ No    | Depends on var/let | No ❌                 |

---

## Why Hoisting Matters

- Explains why `var` shows `undefined` early but `let`/`const` throw errors
- **Prevents sneaky bugs**: Always declare at top of scope or before use
- **Best practice**: Use `let`/`const` (block-scoped, TDZ protection)
- Understanding hoisting = fewer debugging headaches! 🚀

---
