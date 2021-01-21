// 13. EVENT BUBBLING AND DELEGATION

// Bubbling up of events through the DOM
// When an event happens on an element it bubbles up to it's parent

// Event Delegation: opposite of event bubbling
// Put listener on parent element's and use logic inside the event handler to target the element we actually want that of event for

    // 13.1) Bubbling
    document.querySelector('.card-title').addEventListener('click', function(){
        console.log('.card-title');
    });

    document.querySelector('.card-content').addEventListener('click', function(){
        console.log('.card-content');
    });

    document.querySelector('.card').addEventListener('click', function(){
        console.log('card');
    });

    document.querySelector('.col').addEventListener('click', function(){
        console.log('.col');
    });

    // all the events fire up because of bubbling
    