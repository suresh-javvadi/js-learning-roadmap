// create element

const container = document.getElementById("container");

const newDiv = document.createElement("div");
newDiv.id = "NewDiv";

newDiv.textContent = "Hello, I am not in html"; // add tect content
newDiv.innerHTML = "<strong>Hello I am not in HTML</strong>";

container.appendChild(newDiv);

document.body.appendChild(newDiv); //to append element when there is no element
