document.getElementById("myMenu").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});
