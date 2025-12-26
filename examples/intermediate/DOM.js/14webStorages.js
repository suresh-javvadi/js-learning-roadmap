const myInput = document.getElementById("myInput");
const saveBtn = document.getElementById("saveBtn");
const showBtn = document.getElementById("showBtn");

// local storage

saveBtn.addEventListener("click", () => {
  localStorage.setItem("userName", myInput.value);
});

showBtn.addEventListener("click", () => {
  const saved = localStorage.getItem("userName");
  alert("Stored Name: " + saved);
});

// store array or object

const saveArray = document.getElementById("saveArray");
const showArray = document.getElementById("showArray");

const technologies = ["JS", "react", "frontend"];

saveArray.addEventListener("click", () => {
  localStorage.setItem("technologies", JSON.stringify(technologies)); // use json.stringify
});

showArray.addEventListener("click", () => {
  const savedTech = localStorage.getItem("technologies");
  console.log(savedTech);
  alert(`Saved technologies: ${JSON.stringify(savedTech)}`);
});

const saveObject = document.getElementById("saveObject");
const showObject = document.getElementById("showObject");

const user = { name: "Suresh", role: "Devloper", city: "Hyd" };

saveObject.addEventListener("click", () => {
  localStorage.setItem("user", JSON.stringify(user));
});

showObject.addEventListener("click", () => {
  const savedUser = localStorage.getItem("user");
  console.log(savedUser);
  alert(`Saved user: ${JSON.stringify(savedUser)}`);
});

// session storage

saveObject.addEventListener("click", () => {
  sessionStorage.setItem("user", JSON.stringify(user));
});

showObject.addEventListener("click", () => {
  const savedUser = sessionStorage.getItem("user");
  console.log("from sessions", savedUser);
  alert(`Saved user from session: ${JSON.stringify(savedUser)}`);
});
