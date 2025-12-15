# Callback Functions

**Callback Function**: A function **passed as an argument** to another function.

- The receiving function decides **when to execute** it.

```js
function a(params) {
  console.log("Hello");
  params(); // Executes callback when ready
}

a(function xyz() {
  console.log("I am callback");
});
// Output: Hello → I am callback
```

**Why it called "callback"?** You pass `xyz` to `a()`. Now `a()` controls **when** `xyz` runs.

---

## Callbacks Enable Asynchronous JavaScript

**JavaScript is synchronous single-threaded**, but callbacks make it **async-capable**.

```js
// Synchronous execution
function x(y) {
  console.log("x");
  y(); // Runs immediately
}
x(function y() {
  console.log("y");
});
// Output: x → y

// Asynchronous with setTimeout
setTimeout(function () {
  console.log("Time up"); // Runs after 5s
}, 5000);
console.log("This runs first!");
// Output: This runs first! → (5s later) Time up
```

---

## How Callbacks Work (Async Magic)

**Synchronous single-threaded**: One line at a time.

**Callbacks break this**:

1. `setTimeout` takes callback + timer
2. **Stores callback separately** (not on call stack)
3. **Main thread continues** executing remaining code
4. **Timer expires** → callback pushed to call stack
5. **Empty call stack** → callback executes

```js
Main Thread: setTimeout(callback, 5000) → Continue other code
Web APIs: [Timer running in background...]
Callback Queue: [callback waiting...]
↓ (5 seconds later)
Call Stack empty → callback executes!
```

---

## Main Thread Blocking (Problem Callbacks Solve)

**Blocking**: Operation takes 10-20 seconds → **call stack blocked** → no other code runs.

```js
// ❌ BLOCKING - UI freezes!
function heavyTask() {
  // 20 seconds of work
  for (let i = 0; i < 1000000000; i++) {}
  console.log("Heavy task done");
}

heavyTask();
console.log("This waits 20s!"); // UI frozen!
```

**Callbacks Solution**: Offload to Web APIs (timers, events, AJAX).

---

## Benefits of Callbacks

| Problem                    | Callback Solution                 |
| -------------------------- | --------------------------------- |
| **Main thread blocking**   | Offload to Web APIs               |
| **Synchronous limitation** | Async execution via timers/events |
| **Single-threaded**        | Non-blocking operations           |
