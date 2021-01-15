// 7. CREATING ELEMENTS
const li = document.createElement('li');

    // Adding a class
    li.className = 'collection-item';

    // Adding an ID
    li.id = 'new-item';
    
    // Adding a title
    li.setAttribute('title', 'New Item');
    
    // Creating a text node and appending it
    li.appendChild(document.createTextNode('Hello World'));
    
    // Appending li as child to ul
    document.querySelector('ul.collection').appendChild(li);
    
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li
    li.appendChild(link);

    console.log(li);

// 8. REMOVING AND REPLACING ELEMENTS

    // 8.1) Replacing elements
    // Create a new element
    const newHead = document.createElement('h2');
    
    // Create a net
    newHead.id = 'task-title';

    // New Text Node
    newHead.appendChild(document.createTextNode('Task List'));

    // Get the element to be replaced
    const oldHead = document.getElementById('task-title');

    // Get parent of the element to be replaced
    const cardAction = document.querySelector('.card-action'); 

    // Replace the old child with the new child
    cardAction.replaceChild(newHead, oldHead);

    console.log(newHead);


    // 8.2) Removing elements
    const lis = document.querySelectorAll('li');
    const list = document.querySelector('ul');

    // Remove list item
    lis[lis.length-1].remove();

    // Remove child element
    list.removeChild(lis[3]);

    