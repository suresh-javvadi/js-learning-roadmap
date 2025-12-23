# Promises and Promise Chaining

## What is a Promise?

**Promise**: An object that represents the **eventual result** of an asynchronous operation.

- When an async function starts, it **immediately returns a promise**.
- Initially, the promise is typically in **pending** state.
- After the async work finishes, the promise becomes **fulfilled** (resolved) or **rejected** and contains the actual data.
- To handle the result, you can attach a **callback** to the Promise using `.then()`:

---

## How Promises Work

```javascript
const promise = createOrder(cart);
// Immediately returns: { data: undefined, status: 'pending' }

promise.then(function (orderId) {
  proceedPayment(orderId); // Executes ONLY when fulfilled
});
// proceedPayment() waits until promise fills with data
```

**Lifecycle**:

1. createOrder() → Returns empty Promise object (pending)
2. Async work completes → Promise fills with data (fulfilled)
3. .then() callback executes → Gets the data

---

## States of a Promise

| State         | Meaning               | Can Change? |
| ------------- | --------------------- | ----------- |
| **Pending**   | Operation in progress | ✅ Yes      |
| **Fulfilled** | Success + data        | ❌ No       |
| **Rejected**  | Failed + error        | ❌ No       |

**Immutable**: Once fulfilled/rejected, state **never changes**.

---

## Solving Inversion of Control

Promises help solve the **inversion of control** problem common with callbacks, by ensuring that our code determines **what happens next** (via `.then()`), not some external function.

```js
// Callback Hell (No control)
api.createOrder(cart, function(orderId) {
api.proceedPayment(orderId, function() { ... });
});

// Promise (Full control)
createOrder(cart)
.then(proceedPayment)
.then(orderSummary);

```

**Callbacks**: "API controls when my code runs" ❌  
**Promises**: "My code controls when to handle result" ✅

---

## Promise Chaining (Callback Hell Solution)

**Promise chaining** allows you to handle multiple asynchronous operations in sequence, passing the result from one `.then()` to the next.

```js
createOrder(cart)
  .then(function (orderId) {
    return proceedPayment(orderId); // Return next promise
  })
  .then(function (paymentInfo) {
    return orderSummary(paymentInfo); // Chain continues
  })
  .then(function () {
    console.log("Order complete! 🎉");
  });
```

**Key Rule**: **Return** the next promise/result in `.then()` for chaining.

Each `.then()` returns a new Promise, which makes it possible to chain multiple asynchronous tasks in a readable way—this approach helps avoid **callback hell**.

---

## Benefits Over Callbacks

| Problem                  | Callbacks ❌      | Promises ✅           |
| ------------------------ | ----------------- | --------------------- |
| **Inversion of Control** | API controls flow | **You control flow**  |
| **Callback Hell**        | Pyramid nesting   | **Vertical chaining** |
| **Error Handling**       | Nested try-catch  | Single `.catch()`     |
| **Readability**          | Unreadable        | Clean chain           |

---
