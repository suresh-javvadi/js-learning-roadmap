# Promises

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

# Promise Creation

To create a Promise, you instantiate an object using the **`Promise` constructor**.  
The constructor takes a function (called the _executor function_) with two parameters: **`resolve`** and **`reject`**.

---

## Basic Promise Structure

```js
function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    // API logic / DB calls
  });
  return pr;
}
```

- **`resolve()`** — fulfills the Promise and returns the resulting data.
- **`reject()`** — rejects the Promise and returns an error.

---

## Full Example

```js
const promiseC = createOrder(cart);

promiseC.then(function (orderId) {
  console.log(orderId);
});

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // API logic / DB calls
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err); // Reject the promise with an error
      return;
    }

    const orderId = "12345"; // Simulated API response
    resolve(orderId); // Resolve the promise with the orderId
  });

  return pr;
}

function validateCart(cart) {
  return cart.length !== 0;
}
```

---

## Handling Rejections with `.catch()`

If a Promise is **rejected** or fails, you can handle the error using the `.catch()` method.  
This ensures that your application deals gracefully with failed asynchronous operations.

```js
const promiseC = createOrder(cart);

promiseC
  .then(function (orderId) {
    console.log(orderId);
    // proceedPayment(orderId);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });
```

---

### Key Points

- A **Promise** is created using the `new Promise()` constructor.
- The **executor function** inside the Promise runs immediately upon creation.
- Use **`resolve()`** to indicate success and **`reject()`** to signal failure.
- Handle successful resolutions using `.then()` and errors using `.catch()`.
- Always **return the Promise** from the function so it can be chained properly.

---

# Promise Chaining

**Promise chaining** is the process of linking multiple `.then()` calls together to handle asynchronous operations sequentially.  
Each `.then()` returns a new Promise, allowing the next `.then()` in the chain to execute once the previous one is fulfilled.

---

## Key Points

- When data is passed, the callbacks inside `.then()` will execute in order.
- Always **return** data or another Promise inside each `.then()`—this ensures that the chain continues properly.
- If any Promise in the chain is **rejected**, the nearest `.catch()` will handle the error.
- The `.then()` methods written **after a `.catch()`** will still run, ensuring the flow continues even after an error.

---

## Example

```js
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve("Payment successful");
    } else {
      reject("Order ID is missing");
    }
  });
}

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId; // Returning data to continue the chain
  })
  .catch(function (err) {
    console.log("Error in order creation:", err);
  })
  .then(function (orderId) {
    // This will still run even if the above catch executes
    return proceedToPayment(orderId);
  })
  .then(function (info) {
    console.log(info);
  })
  .catch(function (err) {
    console.log("Error during payment:", err);
  });
```

---

## Why Use Promise Chaining?

- It provides a **clean, structured way** to handle multiple asynchronous operations.
- Each step explicitly returns a value or Promise, helping avoid **callback hell**.
- Errors are automatically propagated to the next available `.catch()`.

## Solving Callback Hell

**This is how callback hell is solved** — by giving proper meaningful chain! ✅

> ✅ **In short:** Promises help simplify asynchronous logic, making it easier to read, maintain, and debug compared to deeply nested callbacks.
