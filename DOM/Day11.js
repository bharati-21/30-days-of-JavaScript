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
