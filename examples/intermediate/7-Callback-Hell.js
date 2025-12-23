// Callback Hell
const cart = ["Shoes", "Watch", "Phone"];

api.createOrder(cart, function () {
  api.proceedPayment(function () {
    api.orderSummary(function () {
      api.updateTracking();
    });
  });
});

// Inversion of control

api.createOrder(cart, function () {
  api.proceedPayment();
});
