"use strict";

const list = document.querySelector(".task-list");
const inputTaskName = document.querySelector(".input-box");
const addButton = document.querySelector(".add-button");

addButton.addEventListener("click", addTask);

function addTask() {
  // Trimming the input value to remove any leading and trailing white spaces
  if (inputTaskName.value.trim() === "") {
    return; // Prevent adding empty tasks
  }

  // Create a new list item
  const listItem = document.createElement("li");
  listItem.classList.add("task"); // Add a class to the list item

  // Create a checkbox to mark the task as done
  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");
  checkBox.innerHTML =
    '<img class="checkbox-icon" src="/icons/unchecked.png" alt="checkbox">'; // Add an unchecked tickbox image to the checkbox

  // Add an event listener to the checkbox to mark the task as done
  checkBox.onclick = function () {
    listItem.classList.toggle("done");
    if (listItem.classList.contains("done")) {
      checkBox.innerHTML =
        '<img class="checkbox-icon" src="/icons/checked.png" alt="checkbox">'; // Add a checked tickbox image to the checkbox
    } else {
    checkBox.innerHTML =
      '<img class="checkbox-icon" src="/icons/unchecked.png" alt="checkbox">'; // Add a checked tickbox image to the checkbox
    }
  };

  // Create a span element to hold the task description
  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = inputTaskName.value;

  // Create a button to remove the task
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("remove-button");
  deleteButton.innerHTML =
    '<img class="remove-icon" src="/icons/remove.png" alt="remove-button">'; // Add an image to the button

  // Add an event listener to the delete button to remove the task
  deleteButton.onclick = function () {
    list.removeChild(listItem);
  };

  // Append the checkbox, task description, and the delete button to the list item
  listItem.appendChild(checkBox); // Append checkbox first
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);

  inputTaskName.value = ""; // Clear the input box
}
