const myDiv = document.getElementById("myDiv");

myDiv.addEventListener("scroll", () => {
  console.log("Scrolling...");
});

function throttle(callback, limit) {
  let lastcall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastcall >= limit) {
      lastcall = now;
      callback.apply(this, args);
    }
  };
}

const myDiv1 = document.getElementById("myDiv1");

const throttledScroll = throttle(
  () => console.log("Throttled scrolling"),
  3000
);

myDiv1.addEventListener("scroll", throttledScroll);
