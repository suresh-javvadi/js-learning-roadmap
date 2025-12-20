# Higher-Order Functions

**Higher-Order Function**: A function that **takes a function as an argument** or **returns a function**.

**Key Characteristics**:

- Accepts functions as parameters
- Returns functions as output
- Enables **modular, reusable code**

---

## Basic Example

```js
function x() {
  // Callback function
  console.log("x");
}

function y(callback) {
  // Higher-order function
  console.log("y starts");
  callback(); // Executes passed function
  console.log("y ends");
}

y(x);
// Output:
// y starts
// x
// y ends
```

**Here**: `y` takes `x` as argument → `y` is **higher-order function**.

---

## Practical Example (Custom Map)

```js
const radius = ;

const calculate = function(radiusArray, logic) {
let output = [];

for (let i = 0; i < radiusArray.length; i++) {
output.push(logic(radiusArray[i])); // Applies logic to each item
}
return output;
};

const area = function(r) {
return Math.PI * r * r;
};

console.log(calculate(radius, area));
// Output: [28.27, 12.57, 50.27, 3.14]
```

**Same result using built-in `map()`**:

```js
const mapResult = radius.map(area);
console.log(mapResult); // Identical output!
```

---

## Benefits of Higher-Order Functions

| Advantage                  | Example                                               |
| -------------------------- | ----------------------------------------------------- |
| **Modular code**           | Reuse `calculate()` with different logics             |
| **Reusability**            | Same function, multiple purposes                      |
| **Cleaner code**           | Built-in methods like `map()`, `filter()`, `reduce()` |
| **Functional programming** | Predictable, composable functions                     |

**Higher-order functions = JavaScript's superpower for clean, reusable code!** 🚀
