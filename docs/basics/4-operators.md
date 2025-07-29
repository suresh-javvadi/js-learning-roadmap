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

  **Example:** (../examples/basics/4-operators.js)

- Modulus `%` takes the sign of the left operand:

  **Example:** (../examples/basics/4-operators.js)

---
