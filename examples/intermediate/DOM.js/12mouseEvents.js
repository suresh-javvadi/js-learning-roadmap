const outer = document.getElementById("outer");

outer.addEventListener("mouseenter", () => {
  console.log("mouseenter on outer");
});

outer.addEventListener("mouseover", () => {
  console.log("mouseover on outer");
});
