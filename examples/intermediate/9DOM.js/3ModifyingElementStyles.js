// element.style

const div1Change = document.getElementById("div1");

div1Change.style.color = "red";
div1Change.style.border = "1px solid black";
div1Change.style.background = "yellow";

// to rest specific property

// div1Change.style.color = ""; // removes the 'color' inline style
// div1Change.style.backgroundColor = ""; // removes background color

//to remove all inline styles

// div1Change.removeAttribute("style");

// using class list

const div2change = document.getElementById("div2");

div2change.classList.add("highlight");
div2change.classList.remove("normal");

div2change.removeAttribute("style");
