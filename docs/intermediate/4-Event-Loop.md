# Event Loop and Web APIs

## Call Stack Behavior

**Call stack executes immediately** - never waits for anything.

**When operations need to wait/store**: Browser provides **Web APIs**:

- `setTimeout()`
- `DOM APIs`
- `fetch()`
- `Local Storage`
- `console`
- `location`, etc.

**All Web APIs available via global `window` object**.

---

## setTimeout Example

```js
console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");
// Output: Start → End → (5s later) Callback
```

**Execution Flow**:

1. `console.log("Start")` → calls **console Web API**
2. `setTimeout()` → registers callback + timer via **setTimeout Web API**
3. `console.log("End")` → call stack empties
4. **Timer expires** → callback to **Callback Queue**
5. **Event Loop** pushes to call stack when empty

---

## DOM Event Example

```js
console.log("Start");
document.getElementById("btn").addEventListener("click", function dcb() {
  console.log("Button clicked");
});
console.log("End");
// Output: Start → End → (user clicks) Button clicked
```

**Flow**:

1. DOM API finds button, registers click callback
2. **User clicks** → callback to **Callback Queue**
3. **Event Loop** → call stack → executes

---

## Callback Queue (Task Queue)

**Maintains execution order** - processes one by one when call stack empty.

---

## fetch() Example

```js
console.log("Start");
fetch("https://api.example.com").then(function cbf() {
  console.log("Data logged");
});
console.log("End");
// Output: Start → End → Data logged (almost immediately)
```

**Flow**:

1. `fetch()` → registers Promise callback
2. **Promise resolves** → callback to **Microtask Queue** (Higher priority)
3. **Event Loop** processes microtasks before callbacks

---

## Microtask Queue

**Contains**: High-priority async operations

- **Promises** (`.then()`, `.catch()`)
- **MutationObserver**

**Characteristics**:

- **Higher priority** than Callback Queue
- **Processes one by one** when call stack empty
- **All microtasks complete** before any callback queue tasks run

---

## Microtask Queue vs Callback Queue

```js
console.log("Start");
setTimeout(function cbt() {
  console.log("Callback timeout");
}, 5000);

fetch("https://api.example.com").then(function cbf() {
  console.log("Data logged");
});
console.log("End");
```

**Queue Priority**:

```
1. Call Stack empties
2. Microtask Queue (Promises, MutationObserver) ← HIGHER PRIORITY
3. Callback Queue (setTimeout, events, etc.)
```

---

## Queue Priority Rules

| Callback Type              | Queue           | Priority |
| -------------------------- | --------------- | -------- |
| **Promises**               | Microtask Queue | **High** |
| **MutationObserver**       | Microtask Queue | **High** |
| **setTimeout/setInterval** | Callback Queue  | Normal   |
| **DOM Events**             | Callback Queue  | Normal   |
| **AJAX callbacks**         | Callback Queue  | Normal   |

**Event Loop Process**:

```
Call Stack Empty?
↓ Yes
Process ALL Microtasks → Call Stack Empty? → Process Callback Queue
```
