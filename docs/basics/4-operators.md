# JavaScript Operators

## What Are Operators?

Operators are symbols that perform operations on values, variables, or expressions.

---

## Arithmetic Operators

| Operator | Description                         | Example                  | Result          |
| -------- | ----------------------------------- | ------------------------ | --------------- |
| `+`      | Addition; also string concatenation | `5 + 3` <br> `"5" + "3"` | `8` <br> `"53"` |
| `-`      | Subtraction                         | `5 - 3`                  | `2`             |
| `*`      | Multiplication                      | `5 * 3`                  | `15`            |
| `/`      | Division                            | `6 / 2`                  | `3`             |
| `%`      | Modulus (remainder)                 | `5 % 2`                  | `1`             |
| `**`     | Exponentiation (power)              | `2 ** 3`                 | `8`             |

### Special Notes on Arithmetic

- Division by zero:
  - `0 / 0` → `NaN`
  - `a / 0` (non-zero a) → `Infinity`
  - `-a / 0` → `-Infinity`
- Arithmetic with non-numeric values triggers type coercion or `NaN`:
  - `"5" + 2` → `"52"` (string concatenation)
  - `"5" - 2` → `3` (string coerced to number)
  - `'a' * 3` → `NaN`
  - `null + 1` → `1`
  - `true + 1` → `2`
- Floating point precision:
  - `0.1 + 0.2 == 0.3` is `false` due to binary floating point.
  - Use `(0.1 + 0.2).toFixed(2) == 0.3` → `true`
- The exponentiation operator (`**`) is **right-to-left associative**:

  ```js
  2 ** (3 ** 2); // treated as 2 ** (3 ** 2) == 512
  ```

- Modulus `%` takes the sign of the left operand:

  -5 % 2; // -1

---

## Unary Operators

| Operator | Description                                         | Example      | Result          |
| -------- | --------------------------------------------------- | ------------ | --------------- |
| `++`     | Increment (add 1) (postfix and prefix)              | `x++`, `++x` | Explained below |
| `--`     | Decrement (subtract 1) (postfix and prefix)         | `x--`, `--x` | Explained below |
| `+`      | Unary plus: converts operand to number              | `+'5'`       | `5`             |
| `-`      | Unary minus: converts operand to number and negates | `-'5'`       | `-5`            |

### Postfix vs. Prefix Increment/Decrement

- **Postfix (`x++`, `x--`)**: Returns the current value, then increments/decrements.

  **Example:** (../examples/basics/4-operators.js)

- **Prefix (`++x`, `--x`)**: Increments/decrements first, then returns the new value.

  **Example:** (../examples/basics/4-operators.js)

---

## String Concatenation

- The `+` operator concatenates strings:

  **Example:** (../examples/basics/4-operators.js)

- Template literals (recommended for readability):

  **Example:** (../examples/basics/4-operators.js)

---

## Assignment Operators

Used to assign or update values.

| Operator | Description         | Example  | Equivalent To |
| -------- | ------------------- | -------- | ------------- |
| `=`      | Simple assignment   | `x = 5`  | n/a           |
| `+=`     | Add and assign      | `x += 5` | `x = x + 5`   |
| `-=`     | Subtract and assign | `x -= 5` | `x = x - 5`   |
| `*=`     | Multiply and assign | `x *= 5` | `x = x * 5`   |
| `/=`     | Divide and assign   | `x /= 5` | `x = x / 5`   |
| `%=`     | Modulus and assign  | `x %= 5` | `x = x % 5`   |

- You cannot use compound assignment in variable declarations:

- Always declare first, then update using assignment operators.

- Works with any valid left-hand value means as long as the left-hand side is a reference (like a variable, object property, or array index),

**Example:** (../examples/basics/4-operators.js)

- But you can chain assignments:

  **Example:** (../examples/basics/4-operators.js)

- You can use assignment expressions inside other expressions:

  **Example:** (../examples/basics/4-operators.js)

---

## Comparison Operators

Return Boolean values after comparing operands.

| Operator          | Description                                                    | Example               | Result  |
| ----------------- | -------------------------------------------------------------- | --------------------- | ------- |
| `==`              | Loose equality (with type coercion)                            | `5 == "5"`            | `true`  |
| `===`             | Strict equality (no coercion)                                  | `5 === "5"`           | `false` |
| `!=`              | Loose inequality (with type coercion)                          | `5 != "6"`            | `true`  |
| `!==`             | Strict inequality (no coercion)                                | `5 !== "5"`           | `true`  |
| `>`               | Greater than                                                   | `5 > 3`               | `true`  |
| `<`               | Less than                                                      | `5 < 3`               | `false` |
| `>=`              | Greater than or equal                                          | `5 >= 5`              | `true`  |
| `<=`              | Less than or equal                                             | `5 <= 3`              | `false` |
| `Object.is(a, b)` | Same value comparison with correct handling of NaN, +0, and -0 | `Object.is(NaN, NaN)` | `true`  |

### Important Notes:

- `null == undefined` is `true`, but `null === undefined` is `false`.
- `NaN == NaN` is `false`, but `Object.is(NaN, NaN)` is `true`.

- Non-primitives (objects, arrays) are compared by reference:

  **Example:** (../examples/basics/4-operators.js)

- String comparison is done using character Unicode values.

- JavaScript compares all the characters in the string, one by one, from left to right, until it finds a difference.

---

## Logical Operators

| Operator | Description | Behavior                                           |
| -------- | ----------- | -------------------------------------------------- | ---------- | -------------------------------------------------- |
| `&&`     | Logical AND | Returns first falsy operand or last truthy operand |
| `        |             | `                                                  | Logical OR | Returns first truthy operand or last falsy operand |
| `!`      | Logical NOT | Inverts the truthiness of the operand              |

### Logical AND (`&&`) Behavior

- Returns `true` only if all operands are truthy.
- Short-circuits at the first falsy operand.

Example:

### Logical OR (`||`) Behavior

- Returns `true` if any operand is truthy.
- Short-circuits at the first truthy operand.

Example:

### Logical NOT (`!`)

- Inverts Boolean value:

- Double NOT (`!!`) converts any value to strict Boolean:

---

## Logical Assignment Operators (ES2021)

| Operator | Description                                               | Example           | Result                                |
| -------- | --------------------------------------------------------- | ----------------- | ------------------------------------- | --- | --- | ----- | ----------------------- |
| `        |                                                           | =`                | Assign if left operand is falsy       | `x  |     | = 10` | assigns 10 if `x` falsy |
| `&&=`    | Assign if left operand is truthy                          | `y &&= 30`        | assigns 30 if `y` truthy              |
| `??=`    | Assign if left operand is nullish (`null` or `undefined`) | `z ??= 'default'` | assigns `'default'` if `z` is nullish |

Examples:

---

## Falsy Values in JavaScript

Only these values are falsy in Boolean contexts:

All other values are truthy, including `"0"`, `"false"`, `[]`, `{}`, etc.

---

**For runnable JavaScript examples, see the [Operators Example Code](../../examples/4-operators.js).**

```

```
