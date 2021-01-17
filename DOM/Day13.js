// 11. MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

    // 11.1) Mouse Click
    //clearBtn.addEventListener('click', runEvent);

    // 11.2) Double Click
    //clearBtn.addEventListener('dblclick', runEvent);

    // 11.3) Mouse Down
    //clearBtn.addEventListener('mousedown', runEvent);

    // 11.3) Mouse Down
    //clearBtn.addEventListener('mouseup', runEvent);

    // 11.4) Mouse Enter
    //card.addEventListener('mouseenter', runEvent);

    // 11.5) Mouse Leave
    //card.addEventListener('mouseleave', runEvent);

    // 11.6) Mouse Leave
    //card.addEventListener('mouseover', runEvent);

    // 11.7) Mouse Leave
    //card.addEventListener('mouseout', runEvent);

    // Mouse out and mouse over will fire when the mouse moves out and over other elements in the parent element

    // 11.7) Mouse Move
    card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
    console.log('Event Type:', e.type);

    heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
