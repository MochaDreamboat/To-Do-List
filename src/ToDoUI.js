// Receives new task object from newToDo.js function and implements in DOM.

// Receives information from ToDoStatus.js functions and updates DOM accordingly.

// Generates DOM element for task, procuring/appending appropriate properties and appending result to the DOM.

export {toDoInterface};

// Responsibility: Corroborating task object into one DOM element.

const toDoInterface = (() => {

    const generateTask = function (taskObject) {

        let task = document.createElement('article');
        task.classList.add('task');
        task.setAttribute("id", `${taskObject.objectID}`);

        let descriptors = generateDescriptors(taskObject.task, taskObject.description);
        task.appendChild(descriptors);

        let controls = generateControls(taskObject.objectID);
        task.appendChild(controls);
        
        console.log(task);
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

    const generateControls = function (id) {
        let todayTasks = document.querySelector('.today-tasks');

        let controls = document.createElement('div');
        controls.classList.add('bottom');
        
        let buttons = document.createElement('div');
        buttons.classList.add('buttons');

        let complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = '&#10003';
        buttons.appendChild(complete);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = 'X';
        buttons.appendChild(deleteButton);
        controls.appendChild(buttons);

        deleteButton.addEventListener('click', () => {
            deleteTask(id);
        });

        function deleteTask (id) {
            let removedTask = document.getElementById(id);
            todayTasks.removeChild(removedTask);
        }
        
        // Replace with Date object association (using date-fns)
        let due = document.createElement('p');
        due.textContent = 'DUE: 04/01';

        controls.appendChild(due);
        return controls
    }

    return {generateTask};
})();




