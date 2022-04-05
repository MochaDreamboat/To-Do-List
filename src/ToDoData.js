// Factory function for making a new task object.
// Takes form submission and implements inputs to appropriate task object properties.
// Provides return of object to DOM element creator (ToDoUI.js)

export { taskGenerator, saveTask };

var taskList = [];

const myName = 'Jerold';

const taskGenerator = (task, description) => {
    return {task, description};
};

const saveTask = function (task) {
    taskList.push(task);
};

// Function takes result of to-do factory and stores it in array of task objects.