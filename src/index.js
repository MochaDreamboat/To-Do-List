// Switch script source back to main.js for distribution.

import { toDoInterface } from "./ToDoUI.js";

const newTaskButton = document.getElementById
('new-task');
const form = document.querySelector('form');

newTaskButton.addEventListener('click', () => {
    console.log('Hi');
    form.classList.toggle('visible');
});