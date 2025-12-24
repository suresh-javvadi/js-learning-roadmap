# Promise APIs

**Promise APIs** take an **iterable of Promises** as input, execute them **in parallel**, and provide different ways to handle the results.

---

## `Promise.all()`

- ALL promises **fulfill** → Returns **array of results** in **exact input order**.
- **Execution time** = Completes when the **SLOWEST promise** setteld (waits for everyone).
- **One rejection** → **Immediately rejects** with that error (doesn't wait for others).

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 Fails"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res)) // Won't run
  .catch((err) => console.error(err)); // "P3 Fails"
```

---

## `Promise.allSettled()`

- **Waits for ALL promises to settle** (fulfilled OR rejected).
- Returns **array of objects** in the same order:
  - `{ status: "fulfilled", value: result }`
  - `{ status: "rejected", reason: error }`

```js
Promise.allSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
// Output: [
//   { status: "fulfilled", value: "P1 Success" },
//   { status: "fulfilled", value: "P2 Success" },
//   { status: "rejected", reason: "P3 Fails" }
// ]
```

---

## `Promise.race()`

- Returns the **first settled promise** (fulfilled OR rejected).
- **Fastest promise wins** (either success or failure).

```js
Promise.race([p1, p2, p3])
  .then((res) => console.log(res)) // Won't run
  .catch((err) => console.error(err)); // "P3 Fails" (p2 is fastest at 1s, but p3 rejects at 2s)
```

---

## `Promise.any()`

- Returns the **first FULFILLED promise** (ignores rejections).
- **All rejected** → Returns `AggregateError` with all errors.
- Access individual errors: `err.errors` (array).

```js
Promise.any([p1, p2, p3])
  .then((res) => console.log(res)) // Won't run
  .catch((err) => {
    console.error(err);
    console.error(err.errors); // Array of all rejection reasons
  });
```

---

## Quick Comparison

| API                | Waits For       | One Reject?       | Result Type      |
| ------------------ | --------------- | ----------------- | ---------------- |
| **`all()`**        | ALL fulfilled   | ❌ Immediate fail | Array            |
| **`allSettled()`** | ALL settled     | ✅ Continues      | Array of objects |
| **`race()`**       | First settled   | ✅ Fastest        | Single value     |
| **`any()`**        | First fulfilled | ✅ Ignores        | Single value     |

> ✅ **Perfect for parallel execution with different failure strategies!**
