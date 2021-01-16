// 10. EVENT LISTENERS AND EVENT OBJECT

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    // to prevent default (redirect) behavior instead of a # in href
    // e.preventDefault();

    let val;
    val = e; // e -> event object
    console.log(val);

    console.log("e.target:", val.target);
    console.log("e.target.id:", val.target.id);
    console.log("e.target.className:", val.target.className);
    console.log("e.target.classList:", val.target.classList);
    e.target.innerText = 'You Clicked Me!';

    // Event Type
    console.log("e.type:", val.type);

    // Time Stamp
    console.log("e.timeStamp:", val.timeStamp);
    // Coordinates of event relative to window
    console.log("e.clientY, e.clientX:", val.clientY, e.clientX); 
    // pixels from top (vertical) and from the right

    // Coordinates of event relative to element
    console.log("e.offsetX, e.offsetY:", val.offsetX, e.offsetY); 
    
}

// Default behavior for a <a> is to redirect to a new page hence the page reloads after the event 'click'. 
// Adding an '#' to href avoids redirect 

// The event object has parameters such as:
        // Position of event relative to the window; target (the element on which event occurs), type of event, ShiftKey (if shift key was held when event happened)