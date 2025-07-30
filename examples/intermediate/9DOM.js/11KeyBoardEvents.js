const myInput = document.getElementById("myInput");

myInput.addEventListener("keydown", (e) => {
  console.log("Key down", e.key);
});

myInput.addEventListener("keyup", (e) => {
  console.log("Key up", e.key);
});

myInput.addEventListener("keydown", (e) => {
  console.log(e.key); // 'a', 'Enter', 'ArrowUp', etc.
  console.log(e.code); // 'KeyA', 'Enter', 'ArrowUp' (physical key code)
  console.log(e.altKey); // true if Alt was held
  console.log(e.ctrlKey); // true if Ctrl was held
});

myInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("You pressed Enter!");
  }
});
