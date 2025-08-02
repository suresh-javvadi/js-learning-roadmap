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

function addTask(task, completed = false) {
  const li = document.createElement("li");
  const newSpan = document.createElement("span");
  newSpan.textContent = task;

  li.appendChild(newSpan);
  if (completed) li.classList.add("completed");
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
  let tasks = [];
  todoList.querySelectorAll("li").forEach((li) => {
    const taskText = li.querySelector("span").textContent;
    const completed = li.classList.contains("completed");
    tasks.push({ text: taskText, completed: completed });
  });
  localStorage.setItem("todoList", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTasks = localStorage.getItem("todoList");
  if (!savedTasks) return;

  const tasks = JSON.parse(savedTasks);
  console.log(tasks);
  tasks.forEach((task) => {
    addTask(task.text, task.completed);
  });
});
