// HTML DOM elements
const categoryInput = document.getElementById('category');
const taskInput = document.getElementById('task');
const tasksList = document.getElementById('tasks-list');

// Initialize an object to store tasks by category
const tasksByCategory = {};

// Add a task to the specified category
function addTask() {
    // Take value from input elements.
    const category = categoryInput.value.trim();
    const task = taskInput.value.trim();
    // Check category and task
    if (category === '' || task === '') {
        alert('Both category and task are required.');
        return;
    }
    // Add task to the category
    if (!tasksByCategory[category]) {
        tasksByCategory[category] = [];
    }
    tasksByCategory[category].push(task);
    // Clear input fields and update the displayed tasks
    categoryInput.value = '';
    taskInput.value = '';

    // Refresh displayed tasks
    listTasks();
}

// Display all tasks by category
function listTasks() {
    // Clear the previous tasks from the tasks list
    tasksList.innerHTML = '';

    for (const category in tasksByCategory) {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);

        tasksByCategory[category].forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            
            const taskText = document.createElement('span');
            taskText.textContent = task;
            taskDiv.appendChild(taskText);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeTask(category, index);
            taskDiv.appendChild(removeButton);

            categoryDiv.appendChild(taskDiv);
        });

        tasksList.appendChild(categoryDiv);
    }
}


// Remove a task from the specified category
function removeTask(category, taskIndex) {

    // remove tasks from object tasksByCategory
    tasksByCategory[category].splice(taskIndex, 1);

    // If the category is empty after removal, delete the category
    if (tasksByCategory[category].length === 0) {
        delete tasksByCategory[category];
    }
    // Refresh displayed tasks
    listTasks(); 
}
