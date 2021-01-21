// 13. EVENT BUBBLING AND DELEGATION

// Bubbling up of events through the DOM
// When an event happens on an element it bubbles up to it's parent

// Event Delegation: opposite of event bubbling
// Put listener on parent element's and use logic inside the event handler to target the element we actually want that of event for

    // 13.1) Bubbling
    // document.querySelector('.card-title').addEventListener('click', function(){
    //     console.log('.card-title');
    // });

    // document.querySelector('.card-content').addEventListener('click', function(){
    //     console.log('.card-content');
    // });

    // document.querySelector('.card').addEventListener('click', function(){
    //     console.log('card');
    // });

    // document.querySelector('.col').addEventListener('click', function(){
    //     console.log('.col');
    // });

    // all the events fire up because of bubbling


    // 13.2) Event Delegation
    /*
        const deleteItem = document.querySelector('.delete-item');
        deleteItem.addEventListener('click', function(e){
            console.log('Delete Item');
            e.preventDefault();
        });
    */
    // Works only on the first .delete-item class element
    
    document.body.addEventListener('click', deleteItem);

    function deleteItem(e){
        e.preventDefault();

        // Match the entire class string
        // If any changes to the classlist is made this will not work
        // if(e.target.parentElement.className === 'delete-item secondary-content') {
        //     console.log('Delete Item!');
        // }

        if(e.target.parentElement.classList.contains('delete-item')) {
            console.log('Delete Item!');

            e.target.parentElement.parentElement.remove();
        }
    }
    