// Receives new task object from newToDo.js function and implements in DOM.

// Receives information from ToDoStatus.js functions and updates DOM accordingly.

// Generates DOM element for task, procuring/appending appropriate properties and appending result to the DOM.

export {toDoInterface};

// Responsibility: Corroborating task object into one DOM element.

const toDoInterface = (() => {

    const generateTask = function (taskObject) {
        let task = document.createElement('article');
        task.classList.add('task');
        let descriptors = generateDescriptors(taskObject.task, taskObject.description);
        task.appendChild(descriptors);

        let controls = generateControls();
        task.appendChild(controls);

        return task;
    };

    const generateDescriptors = function (task, description) {
        let descriptors = document.createElement('div');
        descriptors.classList.add('descriptors');

        let taskName = document.createElement('h3');
        taskName.textContent = task;
        descriptors.appendChild(taskName);

        let para = document.createElement('p');
        para.textContent = description;
        descriptors.appendChild(para);

        return descriptors;
    }

    const generateControls = function () {
        let controls = document.createElement('div');
        controls.classList.add('bottom');

        let complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = '&#10003';
        controls.appendChild(complete);

        return controls
    }

    return {generateTask};
})();




