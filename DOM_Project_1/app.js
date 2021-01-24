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

    // Delete item event
    taskList.addEventListener('click', deleteItem);

    // Clear tasks button
    clearBtn.addEventListener('click', clearTasks);

    // Filtering tasks event
    filter.addEventListener('keyup', filterTasks);
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

// Delete item from task list
function deleteItem(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log(e.target);
        if(confirm('Are you sure you want to remove this task?')) {
            e.target.parentElement.parentElement.remove();
        }
        // On clicking gives <i></i>. Hence selecting parent element's parent element (li)
    }
}

// Clear the task list
function clearTasks(e) {
    e.preventDefault();
    // 1st way
    //    taskList.innerHTML = '';
    // 2nd way and faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter task list items
function filterTasks(e) {
    const val = e.target.value.toLowerCase();
    console.log(val);
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(val)!=-1) {
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    });



    // querySelector returns NodeList hence forEach() works
    // elementByClass returns HTML which needs to be converted into an Array before using forEach()
}