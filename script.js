const AddTaskButton = document.getElementById("add-task");
const NewTask = document.getElementById("new-task");

const CheckBox = document.querySelector("input[type=checkbox]");

CheckBox.addEventListener("change", () => {
  CheckBox.nextElementSibling.classList.toggle("completed", CheckBox.checked);
});
