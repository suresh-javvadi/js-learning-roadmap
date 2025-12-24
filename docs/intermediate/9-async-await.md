# Async/Await

**Async/await** is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

---

## `async` Keyword

- **`async`** is a keyword used to create async functions.
- **Async functions always return a Promise**, even if you return a plain value (it's automatically wrapped).

```js
// async function always returns Promise
async function getData() {
  return "Sending text...";
}

const promiseData = getData();
console.log(promiseData); // Promise {<fulfilled>: 'Sending text...'}
promiseData.then((res) => console.log(res)); // "Sending text..."
```

---

## `await` Keyword

- **`await`** resolves a Promise and returns its value.
- Works **only inside async functions**.
- **Suspends function execution** (not the call stack) until the Promise resolves.

```js
const pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 1000); // Reduced timeout for demo
});

async function handlePromise() {
  const data = await pr;
  console.log("Using await", data);
}
handlePromise();
```

---

## Function Suspension (Not Blocking)

```js
async function handlePromise2() {
  console.log("Started the program"); // 1. Runs immediately
  const data = await pr; // 2. Suspends here until resolved
  console.log("Hello world!"); // 3. Runs after pr resolves
  console.log("Using await", data);
}
handlePromise2();
// Output: "Started the program" → (1s pause) → "Hello world!" → "Using await Promise resolved"
```

---

## Cached Promises (No Re-waiting)

Once a Promise resolves, subsequent `await`s on the **same Promise** don't wait again:

```js
async function handlePromise2() {
  console.log("Started the program");
  const data = await pr; // Waits 1s (first time)

  console.log("Hello world!");
  console.log("Using await", data);

  const data2 = await pr; // No waiting (already resolved)
  console.log(data2);
}
```

---

## Sequential Execution

Async functions execute **line-by-line**, waiting for each `await`:

```js
const pr2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 500);
});

async function handlePromise3() {
  console.log("Started the program");
  const data = await pr; // Waits 1s
  console.log("Hello world!");
  console.log("Using await", data);

  const data2 = await pr2; // Waits additional 500ms
  console.log(data2);
}
handlePromise3();
// Total execution: ~1.5s (sequential)
```

---

## `fetch()` with Async/Await

`fetch()` returns a **Response object** (Promise). Use `.json()` (also a Promise) to get data:

```js
const fetchData = async () => {
  const response = await fetch(API_URL);
  console.log("Response", response);

  const jsonData = await response.json(); // .json() is also a Promise
  console.log(jsonData);
};
fetchData();
```

---

## Error Handling with `try/catch`

Use `try/catch` blocks inside async functions:

```js
const fetchData2 = async () => {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log("Error:", error);
  }
};
fetchData2();
```

**Key Point**: If any Promise rejects, execution **jumps directly to `catch`**, skipping remaining `try` code.

---

### Summary

| Feature         | Benefit                         |
| --------------- | ------------------------------- |
| **`async`**     | Makes function return Promise   |
| **`await`**     | Pauses function (not JS engine) |
| **`try/catch`** | Clean error handling            |
| **Sequential**  | Reads like synchronous code     |

> ✅ **Async/await = Promises + cleaner syntax!**
