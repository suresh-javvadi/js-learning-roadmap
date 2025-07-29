# JavaScript Hoisting

## What is Hoisting?

Hoisting is JavaScript's behavior of moving **variable and function declarations to the top of their scope** (function or global) before code execution.

This allows you to use certain variables and functions before their actual declaration lines in the source code—**but with important important exceptions, limitations**.

---

## How Hoisting Works with Variables

- **`var`** declarations are hoisted and initialized with `undefined`.
  - You can access a `var` variable before its declaration, but its initial value will be `undefined`.
- **`let` and `const`** declarations are hoisted but **not initialized**.

  - Accessing them before declaration results in a **ReferenceError** because they are in the **Temporal Dead Zone (TDZ)**

  **Example:** (../examples/basics/2-hoisting.js)

---

## Temporal Dead Zone (TDZ)

- The TDZ is the phase between entering scope or the start of a block and variable declaration with `let` or `const`.
- In the TDZ, the variable exists in memory but is **not accessible**
- Any reference to the variable before the declaration results in a **ReferenceError**.
- TDZ prevents accidental usage of variables before declaration, making code more predictable and safer.

---

## Hoisting with Functions

- **Function declarations** (using the `function` keyword) are **fully hoisted**. You can call them before their declaration in the code.
- **Function expressions** and **arrow functions** are not fully hoisted—they behave like variables and are subject to TDZ rules.

  **Example:** (../examples/basics/2-hoisting.js)

---

## Why is Hoisting Important?

- Understanding hoisting helps explain why `var` variables may be `undefined` when accessed early and why `let`/`const` variables throw errors.
- Helps prevent sneaky bugs—**always declare variables and functions at the top** of their scope or before usage.
- Prefer `let` and `const` as they are block-scoped and must be initialized before use, reducing hoisting confusion.
