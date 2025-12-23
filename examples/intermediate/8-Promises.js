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

//  Promise creation

const promiseC = createOrder(cart);

promiseC
  .then(function (orderId) {
    console.log(orderId);
    // proceedPayment(orderId);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // api logic / DB calls

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = Math.floor(Math.random() * (99999 - 10000 + 1)) + 1000;
    // api will give the response

    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 0);
    }
  });

  return pr;
}

function validateCart(cart) {
  return cart.length !== 0;
}

// promise chaining

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve("Payment successful");
    } else {
      reject("Order id is missing");
    }
  });
}

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (info) {
    console.log(info);
  })
  .then(function () {
    console.log("I will run definitely");
  })
  .catch(function (err) {
    console.log(err);
  });
