// 7. CREATING ELEMENTS
const li = document.createElement('li');

    // 7.1) Adding a class
    li.className = 'collection-item';

    // 7.2) Adding an ID
    li.id = 'new-item';
    
    // 7.3) Adding a title
    li.setAttribute('title', 'New Item');
    
    // 7.4) Creating a text node and appending it
    li.appendChild(document.createTextNode('Hello World'));
    
    // 7.5) Appending li as child to ul
    document.querySelector('ul.collection').appendChild(li);
    
    // 7.6) Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // 7.7) Append link to li
    li.appendChild(link);

    console.log(li);

// 8. REMOVING AND REPLACING ELEMENTS

    // 8.1) Replacing elements
        // 8.1.1) Create a new element
        const newHead = document.createElement('h2');
        
        // 8.1.2) Create a net
        newHead.id = 'task-title';

        // 8.1.3) New Text Node
        newHead.appendChild(document.createTextNode('Task List'));

        // 8.1.4) Get the element to be replaced
        const oldHead = document.getElementById('task-title');

        // 8.1.5) Get parent of the element to be replaced
        const cardAction = document.querySelector('.card-action'); 

        // 8.1.6) Replace the old child with the new child
        cardAction.replaceChild(newHead, oldHead);

        console.log(newHead);


    // 8.2) Removing elements
    const lis = document.querySelectorAll('li');
    const list = document.querySelector('ul');

        // 8.2.1) Remove list item
        lis[lis.length-1].remove();

        // 8.2.2) Remove child element
        list.removeChild(lis[3]);

// 9. CLASSES AND ATTRIBUTES

    // 9.1) Classes
    const firstLi = document.querySelector('li:first-child');
    const firstLink = firstLi.children[0];
    let val;

        // 9.1.1) Getting class name
        val = firstLink.className;
        console.log("<li> link class name:", val);

        // 9.1.2) Getting class list of an element
        val = link.classList; // DOMTokenList
        console.log("firstLink.classList:", val);
        console.log('firstLink.classList[0]:', firstLink.classList[0]);

        // 9.1.3) Adding class to an element
        firstLink.classList.add('test');
        console.log("After adding class test:",firstLink);

        // 9.1.4) Removing an element's class
        firstLink.classList.remove('test');

    // 9.2) Attributes
        // 9.2.1) getAttribute()
        val = firstLink.getAttribute('href');

        // 9.2.2) setAttribute()
        val = firstLink.setAttribute('href', 'http://google.com');

        // 9.2.3) hasAttribute()
        console.log("Does link have an attribute href?", firstLink.hasAttribute('href'));
        console.log("Does link have an attribute title?", firstLink.hasAttribute('title'));

        // 9.2.4) removeAttribute()
        firstLink.removeAttribute('title');

        console.log(firstLink);
        
