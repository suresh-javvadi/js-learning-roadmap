# JavaScript Variable Scope

**Scope** tells the accessibility of variables — where you can use a variable in your code.

---

## Types of Scope

- **Global Scope**
- **Function Scope**
- **Block Scope (ES6: `let` and `const`)**
- **Lexical Scope** (important for closures)

---

## Global Scope

- Variables declared **outside any function or block**.
- Accessible **anywhere** in the code (unless shadowed).

```js
let name = "Suresh";

function greet() {
  name = "Surya";
  console.log(name);
}

// Output: Surya
```

---

## Function Scope

- Variables declared **inside a function**.
- Accessible **only within that function**.

```js
function ironMan() {
  let funVar = "Iron Man";
  console.log(funVar, "from function");
}

ironMan();
console.log(funVar, "from outside function");
// ReferenceError: funVar is not defined
```

---

## Block Scope

- Introduced with **`let`** and **`const`** in ES6.
- Variables declared inside a block `{}`.
- Accessible **only within that block**.

```js
{
  var a = 10;
  let b = 20;
  const c = "haha";
}

console.log(a); // 10 - 'var' is not block-scoped
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
```

---

## Variable Shadowing

**Shadowing** occurs when a variable in an **inner scope** has the **same name** as a variable in an **outer scope**. The **inner (nearer) variable** takes priority and **hides** the outer one.

```js
let globalhero = "RC";
let hero = "MB";

function superhero() {
  let hero = "PK";
  console.log(globalhero, "from function");
  console.log(hero, "from inner scope"); // "PK" printed (inner variable takes priority)
}

superhero();
console.log(hero, "from outer scope"); // "MB"
```

## Illegal Shadowing (❌ Boundary Violation)

- Shadowing should follow boundaries if not it leads to **illegal shadowing**

```js
let a = 10; // Block-scoped

{
  var a = 100; // ❌ SyntaxError: Unexpected redeclaration
}
// var ignores blocks = scope mismatch!
```

---

## Lexical Scope

**Lexical scope** = local memory + **lexical parent memory**.

- Lexical scope or environment is the **local memory** along with its **lexical parent memory**.
- A **lexical parent** is the function/scope that **wraps the definition** of another function within it.

```js
function a() {
  var b = 10;
  c();

  function c() {
    console.log(b);
  }
}

a();
// Output: 10
```

- `a()` is the **lexical parent** of `c()`, since `c` is defined inside `a`.
- `a` itself is lexically inside the **global scope**.

## Scope Chain

- Each execution context carries a **reference to its lexical parent**, which allows accessing variables up the chain.
- The **scope chain** is the process of searching for variables through local and parent lexical environments until the global scope (whose parent is `null`).

**Scope Chain Process:**

1. Search in **local memory** first
2. Check **lexical parent** memory (function that wraps its definition)
3. Continue up chain until **global scope** (parent = `null`)

**Key Rule:**  
Functions in JavaScript are **lexically scoped** — they have access to the variables from where they were **defined**, not where they are **called**.

```js
function greet() {
  let name = "Suresh";
  console.log(name);
}

let name = "Surya";
greet();
// Output: "Suresh" (uses the variable from the function's lexical scope)
```

## Quick Reference

## Scope Comparison Table

| Scope Type | Keywords  | Accessibility   | Hoisting |
| ---------- | --------- | --------------- | -------- |
| Global     | All       | Everywhere      | var=yes  |
| Function   | All       | Function only   | var=yes  |
| Block      | let/const | Block only      | No       |
| Lexical    | All       | Definition site | N/A      |

- `var` = function/global scope
- `let`/`const` = block scope
- Functions = lexical scope (where defined)
