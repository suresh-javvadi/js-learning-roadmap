# `this` Keyword (Complete Guide)

**`this`**: A keyword that **references the object of the currently executing function**. Its value depends on **how/where the function is invoked**, not where it's defined.

**Every function call has an execution context object** - `this` points to that object.

---

## `this` in Different Contexts

### 1. Global Scope

```js
console.log(this); // window (browser) / global or {} (Node.js)
```

### 2. Regular Function (Standalone)

```js
function show() {
  console.log(this); // window (browser) / undefined (strict mode)
}
show();
```

### 3. Object Method

```js
const smile = {
name: "Suresh",
greet: function() {
console.log(${this.name}); // "Suresh" - this = smile object
}
};
smile.greet(); // Called as method → this = smile
```

### 4. Assigned Method (this Lost)

```js
const sayHi = smile.greet; // Copy function reference
sayHi(); // undefined/window - this lost!
```

---

## Arrow Functions vs Regular Functions

**Arrow functions**: **No own `this`** - inherit from **lexical scope** (where defined).

```js
const help = {
name: "Suresh",
message: "Help me",

askHelp: function() { // Regular: own this
console.log(${this.name} please ${this.message});
},

againHelp: () => { // Arrow: lexical this (window/global)
console.log(${this.name} please ${this.message}); // undefined/"" please undefined
}
};

help.askHelp(); // "Suresh please Help me"
help.againHelp(); // undefined please undefined
```

**setTimeout Example**:

**Regular function**: Creates its **own `this`** (global/undefined) - **loses person context**  
**Arrow function**: Inherits `this` from **lexical scope** (greet() → person object)

```js
const person = {
name: "PK",
greet() {
setTimeout(function() {
console.log(${this.name} from normal); // undefined
});

setTimeout(() => {
  console.log(`${this.name} from arrow`);  // "PK" (inherits from person)
});
}
};
person.greet();
```

---

## Controlling `this`: bind(), call(), apply()

**These three methods help manually control/add `this` reference**.

---

### bind(thisArg) - Permanent `this`

**Returns new function** with **permanently locked `this`**.

- `thisArg`: The value to use as `this` inside the new function

```js
const bottle = {
color: "pink",
cap: function() {
console.log(Bottle color is ${this.color});
}
};

const myBottle = bottle.cap;
myBottle(); // undefined (this lost)

const bindBottle = bottle.cap.bind(bottle); // Lock this = bottle
bindBottle(); // "Bottle color is pink"
```

---

### Partial Functions (Prefilling Arguments)

**`func.bind(thisArg, arg1, arg2, ...)`** - Pre-fill arguments permanently.

**func.bind(thisArg, arg1, arg2, ...)**

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // a fixed to 2
const triple = multiply.bind(null, 3); // a fixed to 3

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**How bind() works with arguments**:

```js
func.bind(thisArg, arg1, arg2, ...)
→ First arg = thisArg, rest = pre-filled parameters
```

**Key Points**:

- **Permanent**: Cannot re-bind after bind()
- **`null` for thisArg**: When you don't need specific `this`

---

### call(thisArg, arg1, arg2, ...) - Immediate Invoke

**Invokes function immediately** with **manually set `this`**.

- `thisArg`: The value to use as `this` inside the function
- `arg1, arg2, ...`: Individual arguments passed to function

```js
const person = {
  name: "Suresh",
  role: "Developer",
};

function greet(greeting) {
  console.log(`${greeting}, I'm ${this.name} (${this.role})`);
}

greet.call(person, "Hi"); // "Hi, I'm Suresh (Developer)"
```

**Another Example**:

```js
function job() {
console.log(${this.name});
}

const jobTypes = { name: "Developer" };
job.call(jobTypes); // "Developer"
```

**How call() works**:

```js
func.call(thisArg, arg1, arg2, ...)
→ Sets this = thisArg, passes args individually, invokes IMMEDIATELY
```

**Key Points**:

- **Immediate execution** - returns function result
- **Arguments separated by commas**
- **Cannot override arrow function `this`**

---

### apply(thisArg, [arg1, arg2, ...]) - Array Arguments (Same as call )

**Invokes function immediately** with **manually set `this`** and **array arguments**.

- `thisArg`: The value to use as `this` inside the function
- `[arg1, arg2, ...]`: **Array** of arguments passed to function

```js
const num = [1, 2, 436, 90, 32, 56, 3, 4];
const max = Math.max(nums); // NaN (doesn't accept arrays)
const maxWithApply = Math.max.apply(null, nums); // 436
console.log(maxWithApply, "Max using apply");
```

**Another Example**:

```js
const person = {
  name: "Suresh",
  role: "Developer",
};

function greet(greeting, time) {
  console.log(`${greeting}, I'm ${this.name} at ${time}`);
}

greet.apply(person, ["Hi", "morning"]); // "Hi, I'm Suresh at morning"
```

**How apply() works**:

```js
func.apply(thisArg, [arg1, arg2, ...])
→ Sets this = thisArg, spreads array args, invokes IMMEDIATELY
```

**Key Points**:

- **Immediate execution** - returns function result
- **Arguments as single array** `[]`
- **Perfect for Math functions** (max, min, etc.)
- **Cannot override arrow function `this`**

---

## Summary Table

| Context        | `this` Value       | Arrow Function?   |
| -------------- | ------------------ | ----------------- |
| **Global**     | `window`/global    | Same              |
| **Method**     | **Object**         | **Lexical scope** |
| **Callback**   | `undefined`/window | **Lexical scope** |
| **bind()**     | **Locked object**  | Cannot override   |
| **call/apply** | **Manual object**  | Cannot override   |

---
