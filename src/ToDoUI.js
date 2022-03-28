// Receives new task object from newToDo.js function and implements in DOM.

// Receives information from ToDoStatus.js functions and updates DOM accordingly.

// Generates DOM element for task, procuring/appending appropriate properties and appending result to the DOM.

export {toDoInterface}

const toDoInterface = (() => {
    const generateTask = function (taskObject) {
        const task = document.createElement('article');
        task.appendChild(generateDescriptors(taskObject.task, taskObject.description));
    };

    const generateDescriptors = function (task, description) {
        const descriptors = document.createElement('div');
        descriptors.classList.add('descriptors');

        const taskName = document.createElement('h3')
        taskName.textContent = task;
        descriptors.appendChild(taskName);

        const para = document.createElement('p');
        para.textContent = description;
        descriptors.appendChild(para);
    
    return descriptors;
    }
    return {generateTask};
})();




