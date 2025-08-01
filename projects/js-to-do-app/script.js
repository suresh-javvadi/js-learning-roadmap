const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    addTask(newTask);
  }
});

function addTask(task) {
  const newli = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.textContent = task;

  newli.appendChild(newSpan);
  todoList.appendChild(newli);

  newSpan.addEventListener("click", function () {
    newli.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "deleteBtn";
  newli.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    newli.remove();
  });
}
