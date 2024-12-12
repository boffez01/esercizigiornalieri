
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const tasksContainer = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputField = form.querySelector("input");
    const taskText = inputField.value.trim();

    if (taskText !== "") {
      createTask(taskText);
      inputField.value = "";
    }
  });

  function createTask(taskContent) {
    const taskElement = document.createElement("div");
    taskElement.className = "task";

    const taskText = document.createElement("span");
    taskText.textContent = taskContent;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#x2715;";
    deleteButton.addEventListener("click", () => taskElement.remove());

    taskElement.appendChild(taskText);
    taskElement.appendChild(deleteButton);

    taskElement.addEventListener("click", () => {
      taskText.classList.toggle("completed");
    });

    tasksContainer.appendChild(taskElement);
  }
});
