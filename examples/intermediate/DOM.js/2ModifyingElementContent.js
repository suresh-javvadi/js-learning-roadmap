// textContent

const changeText = document.getElementById("para1");

changeText.textContent = "Surya"; // replaces visible the text
console.log(changeText.textContent); // get the text

const para2change = document.getElementById("para4");

para2change.textContent = "I am not bold"; // also removes inner HTML

// innerText

const innerText = document.getElementById("para2");

console.log(innerText.innerText); // ignores the hidden test

const innerTextChange = document.querySelector("#para2 span");
console.log(innerTextChange.innerText); // display the text

// innerHTML

const addingHTML = document.getElementById("para3");

addingHTML.innerHTML = "<strong>Suresh</strong>"; // make bolds

const replaceInner = document.getElementById("para5");

replaceInner.innerHTML = replaceInner.innerHTML.replace(
  "suresh",
  "<strong>Suresh</strong>"
);

// create element

const addNewp = document.createElement("p");
addNewp.textContent = "I am not in Html";
document.body.appendChild(addNewp);

// remove

const itemRemove = document.getElementById("div1");

itemRemove.remove(); // to remove from tha dom

const itemRemove2 = document.getElementById("div1");

itemRemove2.innerHTML = ""; // remove only inner content
