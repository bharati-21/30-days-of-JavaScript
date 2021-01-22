// 14. LOCAL AND SESSION STORAGE

// local storage API is mentioned in the window object

// local storage: stay until you manually clear the settings
// session storage ends once the browser is closed

// 14.1) Set local storage item
localStorage.setItem('name', 'Bharati');
localStorage.setItem('age', '21');

// 14.1) Set session storage item
// sessionStorage.setItem('name', 'Bhar');

// remove from local storage
localStorage.removeItem('name');

// get from local storage
age = localStorage.getItem('age');
console.log("local storage age:", age);

// to clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', 
function(e) {
    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // Change to JSON object from a string
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    e.preventDefault();
    alert(`Task ${task} saved`);
});

const taskItems = JSON.parse(localStorage.getItem('tasks'));
taskItems.forEach(function(task){
    console.log(task);
});