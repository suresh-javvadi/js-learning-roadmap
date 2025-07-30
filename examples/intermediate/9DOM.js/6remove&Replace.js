const head1 = document.getElementById("Head1");

head1.remove(head1); // removes head1 form DOM

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.removeChild(child); // remove child

const oldPara = document.getElementById("oldPara");
const newHeading = document.createElement("h2");
newHeading.textContent = "I'm a new heading!";

// oldPara.replaceWith("Suresh");
oldPara.replaceWith(newHeading);

const parent1 = document.getElementById("parent1");
const child1 = document.getElementById("child1");

const newPara = document.createElement("p");
newPara.textContent = "I am the new paragraph repLACED";

parent1.replaceChild(newPara, child1);
