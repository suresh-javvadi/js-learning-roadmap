// Select by ID

const heading = document.getElementById("Heading");
console.log("Heading:", heading);
console.log("Heading text:", heading.textContent);

// Select by class

const paragraphs = document.getElementsByClassName("para");
console.log("Paragraph:", paragraphs);
console.log("Paragraph count:", paragraphs.length);

// Select by Tag

const paraTags = document.getElementsByTagName("p");
console.log("P tags", paraTags);
console.log("P tags count", paraTags.length);

// Using querySelector

const firstPara = document.querySelector(".para");
console.log("First Paragraph:", firstPara.textContent);

// Using querySelectorAll

const allParas = document.querySelectorAll(".para");
console.log("All paras", allParas);
allParas.forEach((p) => console.log("Each para:", p.textContent));
