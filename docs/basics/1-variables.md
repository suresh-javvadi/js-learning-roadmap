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

## Dynamic Typing in JavaScript

JavaScript is dynamically typed, meaning variables can hold any type of value and that type can change at runtime.
