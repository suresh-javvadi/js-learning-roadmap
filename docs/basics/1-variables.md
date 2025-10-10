# JavaScript Variables

## What Are Variables?

Variables are containers that store values and behave as if they were the actual values themselves.

They allow us to write code where the output can change based on the values stored.

---

## Variable Scope

Scope tells accessibility of variables — where you can use a variable in your code.

- Global Scope

  - Variables declared outside any function or block.
  - Accessible anywhere in the code (unless shadowed).

  **Example:**
  (../examples/basics/1-variables.js)

- Function Scope

  - Variables declared inside a function
  - Only accessible within that function.

- Block Scope
  - Introduced with let and const in ES6.
  - Variables declared inside the block {}
  - Only accessible within that block (inside {}).

## Variable Declarations: `var`, `let`, and `const`

- **`let`**

  - Scope: Block-level (available inside the nearest `{ }` block, or global if declared outside).
  - Can be updated (reassigned).
  - Cannot be redeclared in the same scope.

  **Example:**
  (../examples/basics/1-variables.js)

---

- **`const`**

  - **Scope:** Block-level (same as `let`).
  - Must be initialized when declared
  - Cannot be updated or redeclared.
  - For objects/arrays, their contents can be changed, but you cannot reassign the variable itself:

  **Examples:**
  (../examples/basics/1-variables.js)

- **`var`**

  - Scope: Function-level (available inside the function, or global if declared outside).
  - Can be updated and redeclared.

  **Examples:**
  (../examples/basics/1-variables.js)

---

## Variable Naming Rules (Identifiers)

When naming variables in JavaScript:

- Cannot start with a number (e.g., `1stPlace` is invalid).
- Can only contain letters, digits, underscores (`_`), and dollar signs (`$`).
- Cannot use reserved keywords like `let`, `const`, `var`, `function`, etc.
- Variable names are case-sensitive (`name` and `Name` are different).

---

## Special Values: `undefined` and `null`

- **`undefined`** means the variable has been declared but not assigned a value yet.

- **`null`** means the variable is intentionally assigned an empty or "no value" state.

---

The scope of a variable depends on both the keyword (`var`, `let`, `const`) and where it is declared.

---

# Undefined vs Not Defined in JavaScript

## Undefined

**Undefined** is a special keyword in JavaScript.

- It is automatically allocated to variables when the JS engine reserves memory but no value has been assigned yet.
- This acts as a placeholder until the variable is assigned another value.

```js
var u;
console.log(u); // undefined is allocated until a value is assigned

u = 10;
console.log(u); // 10 replaces undefined
```

## Not Defined

**Not Defined** refers to an error thrown when trying to access a variable that does not exist in the current scope.

- This means the variable has never been declared.

```js
console.log(n); // Throws ReferenceError: n is not defined
```

## JavaScript Variable Typing

JavaScript is **loosely/dynamically typed language**, meaning:

- variables can hold any type of value and that type can change at runtime.
- You do not need to declare the type of a variable.
- You can store different types of data in the same variable over time.

```js
let data = 42; // number
data = "Hello"; // string - allowed
data = true; // boolean - also allowed
```
