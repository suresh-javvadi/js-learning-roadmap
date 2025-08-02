const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = todoInput.value.trim();
  if (newTask !== "") {
    addTask(newTask);
  }
  saveTasks();
  todoInput.value = "";
});

function addTask(task) {
  const li = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.textContent = task;

  li.appendChild(newSpan);
  todoList.appendChild(li);

  newSpan.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "deleteBtn";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });
}

function saveTasks() {
  localStorage.setItem("todoList", todoList.innerHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("todoList");
  if (!savedTasks) return;

  todoList.innerHTML = savedTasks;

  todoList.querySelectorAll("li").forEach((li) => {
    li.querySelector("span").addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", () => {
      li.remove();
      saveTasks();
    });
  });
});
