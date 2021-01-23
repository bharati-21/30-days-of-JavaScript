// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add task
function addTask(e) {
    e.preventDefault();
    if(taskInput.value === '') {
        alert('Add task!');
    }
    else {
        const li = document.createElement('li');
        // Add class for list item
        li.className = 'collection-item';
        // Create TextNode and append it to list item with the user input
        li.appendChild(document.createTextNode(taskInput.value));
        // Create a link for removing the list item
        const link = document.createElement('a');
        // Add link name
        link.className = 'delete-item secondary-content';
        // Add font awesome 'x' to the link
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the child to list item
        li.appendChild(link);

        console.log(li);

        // Append the list item to the list collection (ul)
        taskList.appendChild(li);

        taskInput.value = "";
    }
} 