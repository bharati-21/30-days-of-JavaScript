// 3. DOM SELECTORS FOR SINGLE ELEMENTS
// Gets the first element that is being searched if multiple elements of that type exists

//used mostly for dynamic functionality

    // 3.1) document.getElementById()
    console.log("document.getElementById('task-title') :", document.getElementById('task-title'));
    
    val = document.getElementById('task-title');

        // 3.1.1) Getting things from the element
        console.log("document.getElementById('task-title').id:", val.id);

        console.log("document.getElementById('task-title').className:", val.className);

        //3.1.2) Change styling
        val.style.background = '#333';
        val.style.color = '#fff';
        val.style.padding = '5px';

        // document.getElementById('task-title').style.display = none;

        //3.1.3) change content
        val.textContent = 'Task List';
        val.innerText = 'My Task List';

        //3.1.4) Inserting HTML
        val.innerHTML = '<span style="color:yellow">Task List</span>';

// 4. QUERY SELECTORS

val = document.querySelector('#task-title');
console.log("document.querySelector('#task-title'):", val);

val = document.querySelector('.card-title');
console.log("document.querySelector('.card-title'):", val);

val = document.querySelector('h5');
console.log("document.querySelector('h5'):", val); // gets the first <h5> element</h5>

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue'; //nested classes

document.querySelector('li:last-child').style.color = 'yellow'; 
document.querySelector('li:nth-child(3)').style.color = 'red'; 

document.querySelector('li:nth-child(4)').textContent = 'Hello World!'; 

document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // only affects the first odd li element
