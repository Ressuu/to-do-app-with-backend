const AddTaskButton = document.getElementById("add-task");
const NewTask = document.getElementById("new-task");
const NewTaskInput = document.querySelector("#new-task");
const TaskList = document.querySelector(".task-list");

// Add an event listener for the "click" event to the CheckBox element
TaskList.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const listItem = event.target.closest("li");
    listItem.classList.toggle("completed", event.target.checked);
  }
});
// finish

// Select all buttons with the class "delete-task"
TaskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-task")) {
    const listItem = event.target.closest("li");
    listItem.remove();
  }
});
// finish

// Add new task to list item
function addTask() {
  const taskText = NewTaskInput.value.trim();
  if (taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
     <input type="checkbox" />
            <span>${taskText}</span>
            <button class="delete-task">X</button>`;
    TaskList.appendChild(listItem);
    NewTaskInput.value = "";
  }
}
// finish

AddTaskButton.addEventListener("click", addTask);

NewTaskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
