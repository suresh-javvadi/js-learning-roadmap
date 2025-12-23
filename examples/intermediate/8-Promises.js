const cart = ["Shoes", "Watch", "Phone"];

const promise = createOrder(cart);

// {data: undefined} after async completes
// {data: response}

promise.then(function (orderId) {
  proceedPayment(orderId);
});

const GIT_HUB_API = "https://api.github.com/users/suresh-javvadi";

const user = fetch(GIT_HUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});

//  Promise chaining

createOrder(cart)
  .then(function (orderId) {
    return proceedPayment(orderId);
  })
  .then(function (paymentInfo) {
    return orderSummary(paymentInfo);
  });
