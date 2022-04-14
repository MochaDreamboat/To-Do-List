// Switch script source back to main.js for distribution.

import {toDoInterface} from "./ToDoUI.js";
import {taskGenerator, taskList} from "./ToDoData.js";

const newTaskButton = document.getElementById('new-task');
const form = document.querySelector('form');
const todayTasks = document.querySelector('.today-tasks');

// Form field nodes:
const task = document.getElementById('task');
const description = document.getElementById('description');
const due = document.getElementById('due');

// Opens up form by changing visibility.
newTaskButton.addEventListener('click', () => {
    form.classList.toggle('visible');
});

// Listens for submit and creates task, pushes to task array, and adds to DOM.

form.addEventListener('submit', () => {
    event.preventDefault();
    let priority = document.querySelector('input[name="priority"]:checked');
    let newTask = taskGenerator(task.value, description.value, due.value, priority.value);
    taskList[`${newTask.objectID}`] = newTask;

    newTask = toDoInterface.generateTask(newTask);
    todayTasks.appendChild(newTask);
    console.log(taskList);
});