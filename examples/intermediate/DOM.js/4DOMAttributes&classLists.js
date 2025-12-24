// Accessing and Modifying Attributes

const logo = document.getElementById("logo");

// Read the attribute
console.log(logo.getAttribute("src"));

// set or update

console.log(logo.setAttribute("src", "./New Logo.png"));

console.log(logo.setAttribute("alt", "Newlogo"));

// remove

logo.removeAttribute("alt");
console.log(logo);

// classlist

logo.classList.add("card");

// logo.classList.remove("card");

console.log(logo.classList.contains("big")); // gives boolean
