// Factory function for making a new task object.
// Takes form submission and implements inputs to appropriate task object properties.
// Provides return of object to DOM element creator (ToDoUI.js).

const toDoFactory = (task, description, priority, due) => {
    return {task, description, priority, due}
}

