// Factory function for making a new task object.
// Takes form submission and implements inputs to appropriate task object properties.
// Provides return of object to DOM element creator (ToDoUI.js)

export { taskGenerator, taskList };

const taskGenerator = (task, description, due, priority) => {
    let objectID = idGen();
    
    // Generates random ID for usage in task's DOM element.
    function idGen() {
        
        let S4 = function () {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    return {task, description, due, priority, objectID};
};

const taskList = {

};

// Make Projects library a module????

// Function takes result of to-do factory and stores it in array of task objects.