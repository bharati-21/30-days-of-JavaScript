// 12. KEYBOARD EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = ''; // To clear input 

    // 12.1) Keydown event
    // taskInput.addEventListener('keydown', runEvent);

    // 12.2) Keyup event
    // taskInput.addEventListener('keyup', runEvent);

    // 12.3) Keypress event
    // taskInput.addEventListener('keypress', runEvent);

    // 12.4) Focus event
    // taskInput.addEventListener('focus', runEvent);

    // 12.5) Blur event
    // taskInput.addEventListener('blur', runEvent);

    // 12.6) Cut event
    // taskInput.addEventListener('cut', runEvent);

    // 12.7) Copy event
    // taskInput.addEventListener('copy', runEvent);   
    
    // 12.8) Paste event
    // taskInput.addEventListener('paste', runEvent);

    // 12.9) Input event
   // taskInput.addEventListener('input', runEvent);
    // Fires when copy, copy and paste done. Basically when any input event!

    // 12.10) Change event
    // select.addEventListener('change', runEvent);



function runEvent(e) {
    console.log(`EVENT TIME: ${e.type}`);
    // e.preventDefault();

    // To get the value of text input
    // console.log("New Task:", taskInput.value);

    // console.log("e.target", e.target.value);

    heading.innerText = e.target.value;
}
