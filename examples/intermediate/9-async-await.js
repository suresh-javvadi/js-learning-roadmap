// async function always returns Promise
async function getData() {
  return "Sending text...";
}

const PromiseData = getData();

console.log(PromiseData); // gets Promise

PromiseData.then((res) => console.log(res)); // Sending text...

const pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 10000);
});

async function sendPr() {
  return pr;
}

console.log(sendPr());

sendPr().then((res) => console.log(res)); // Promise resolved

// async and await

async function handlePromise() {
  const data = await pr;

  console.log("Using await", data);
}

handlePromise();

async function handlePromise2() {
  console.log("Started the program");
  const data = await pr; // suspend here until resolved

  console.log("Hello world!"); // this will print after pr resolve
  console.log("Using await", data);

  const data2 = await pr; // no waiting
  console.log(data2);
}

// handlePromise2();

const pr2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 5000);
});

async function handlePromise3() {
  console.log("Started the program");
  const data = await pr; // suspend here until resolved

  console.log("Hello world!"); // this will print after pr resolve
  console.log("Using await", data);

  const data2 = await pr2;
  console.log(data2);
}

handlePromise3();

// fetch (), real world example

const API_URL = "https://api.github.com/users/suresh-javvadi";

const fetchData = async () => {
  const data = await fetch(API_URL);

  console.log("Response", data); // fetch gives the response

  const jsonData = await data.json();

  console.log(jsonData);
};
fetchData();

// Error handling

const fetchData2 = async () => {
  try {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
};
fetchData2();
