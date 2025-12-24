const myBtn = document.getElementById("myBtn");
const myBtn1 = document.getElementById("myBtn1");

myBtn.addEventListener("click", () => alert("Button clicked"));

myBtn1.addEventListener(
  "click",
  () => alert("Button clicked - This is first and last time"),
  { once: true }
);
