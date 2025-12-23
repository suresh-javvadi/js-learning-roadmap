# Callback Hell & Inversion of Control

## Callback Hell

**Definition**: Nesting callbacks inside callbacks, creating **unreadable, unmaintainable code**.

**Problems**:

- **Horizontal growth** (pyramid of doom) instead of vertical
- **Code becomes unreadable**
- **Hard to debug/maintain**
- **Error handling nightmare**

### Pyramid of Doom Example

```js
const cart = ["Shoes", "Watch", "Phone"];

api.createOrder(cart, function () {
  api.proceedPayment(function () {
    api.orderSummary(function () {
      api.updateTracking(function () {
        api.sendNotification(function () {
          console.log("Order complete! 😊");
        });
      });
    });
  });
});
```

**Visual Problem**:

```
api.createOrder( ← Deep nesting
api.proceedPayment( ← Indentation nightmare
api.orderSummary( ← Pyramid of doom
api.updateTracking( ← Unreadable!
```

---

## Inversion of Control

**Definition**: **Losing control** of code execution to callbacks.

**Problem**: Your code execution **depends on external callbacks**.

```js
api.createOrder(cart, function () {
  api.proceedPayment(); // Depends on createOrder() success
});
```

**Issues**:

- `proceedPayment()` **cannot execute** unless `createOrder()` calls callback
- **No control** over execution timing/order
- **Unpredictable flow** - depends on API/library behavior
- **Multiple execution risk** if callback called repeatedly

---

## Why This Hurts

| Problem                  | Impact                      |
| ------------------------ | --------------------------- |
| **Callback Hell**        | Unreadable pyramid code     |
| **Inversion of Control** | Lose execution flow control |
| **Error Handling**       | Nested try-catch nightmare  |
| **Testing**              | Hard to mock/stub callbacks |
| **Debugging**            | Stack trace explosion       |

**Solution**: **Promises → async/await** (eliminates callback hell!)

---

## ✅ **Your Analysis is PERFECT!**

- **Pyramid of doom**: Spot-on terminology
- **Horizontal growth**: Accurate description
- **Inversion of control**: Textbook correct
- **Real-world example**: Industry standard
