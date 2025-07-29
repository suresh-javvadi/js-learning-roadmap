# JavaScript Data Types

## Overview

JavaScript has **two main categories of data types**:

- **Primitive Data Types** — hold single values.
- **Non-Primitive Data Types** — hold collections or functions.

---

## Primitive Data Types

- Hold single, immutable values stored directly in memory.
- Compared and copied by **value**.

| Type          | Description                     | Examples             |
| ------------- | ------------------------------- | -------------------- |
| **String**    | Text (in quotes)                | `"hello"`, `'world'` |
| **Number**    | Integers and floating points    | `42`, `3.14`         |
| **Boolean**   | True or false values            | `true`, `false`      |
| **Undefined** | Declared but not assigned       | `let x;`             |
| **Null**      | Intentionally empty value       | `let y = null;`      |
| **BigInt**    | For very large integers         | `123456789n`         |
| **Symbol**    | Unique and immutable identifier | `Symbol("id")`       |

### Important Characteristics

- **Stored directly in memory:** Store actual value

  **Example:** (../examples/basics/3-data-types.js)

- **Immutable:** Once created, primitive values cannot be changed.

  **Example:** (../examples/basics/3-data-types.js)

- **Copied by value**

  **Example:** (../examples/basics/3-data-types.js)

- **Wrapper Objects (Autoboxing):**  
  When you use properties or methods on primitives, JavaScript temporarily wraps them in their respective object types:

| Primitive Type | Wrapper Object |
| -------------- | -------------- |
| `string`       | `String`       |
| `number`       | `Number`       |
| `boolean`      | `Boolean`      |

- Primitives act like objects temporarily through autoboxing (using wrapper objects like String, Number, Boolean).

  **Example:** (../examples/basics/3-data-types.js)

---

## Non-Primitive Data Types

- Includes Objects, Arrays, and Functions.

  | Type         | Description                                            | Example                                   |
  | ------------ | ------------------------------------------------------ | ----------------------------------------- |
  | **Object**   | Key-value pairs, collections of properties and methods | `{ name: "Suresh", age: 25 }`             |
  | **Array**    | Ordered list of values, indexed collection             | `[1, 2, 3]`                               |
  | **Function** | Reusable block of code that can be invoked             | `function greet() { console.log("Hi"); }` |

- Stored **by reference** — variables hold a reference (memory address) to the actual object.

  **Example:** (../examples/basics/3-data-types.js)

- Compared and copied by **reference**.

  **Example:** (../examples/basics/3-data-types.js)

- **Mutable** — their content can be changed after initialization.

---

## Using `typeof`

- `typeof` operator helps check the type of a variable.

---

## Falsy Values in JavaScript

Only **7 values** are falsy, meaning they evaluate to false in a boolean context:

`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

Even Other values like `"0"`, `"false"`, `[]`, `{}` are **truthy**.
