const mySearch = document.getElementById("mySearch");

// let debounceTimer;

// mySearch.addEventListener("input", () => {
//   clearTimeout(debounceTimer);

//   debounceTimer = setTimeout(() => {
//     console.log(`Search for: ${mySearch.value}`);
//   }, 500); // logs after 0.5 seconds form input  gets changed
// });

// reusable debounce

const debounce = (callBack, delay) => {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      callBack.apply(this, args);
    }, delay);
  };
};

const handleSearch = (e) => {
  console.log(`Searching for ${e.target.value}`);
};

mySearch.addEventListener("input", debounce(handleSearch, 3000));
