/*

GAME FUNCTION
- Player must guess a number between min and max
- Player gets a certain number of guesses
- Notify player of number of guesses
- Notify the player of the correct answer if loose
- Let player choose to play again

*/

// UI Elements

const game = document.querySelector('#game');

const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

const inputNum = document.querySelector('#guess-input');
const submitBtn = document.querySelector('#guess-btn');

const message = document.querySelector('.message');

let min = 1, max = 10, winNum = 2, guessLeft = 3;


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Event Listener for submitBtn
submitBtn.addEventListener('click', checkNum);

function checkNum(e) {
    e.preventDefault();

    let guessNum = parseInt(inputNum.value);

    // Validate input
    if(isNaN(guessNum) || guessNum < min || guessNum > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    /// Check if the input number is equal to number
    if(guessNum == winNum) {
        gameOver(true, `Hurray, YOU WON! The number is ${winNum}`);
    }

    else {
        guessLeft-=1;
        console.log(guessLeft)
        if(guessLeft === 0) {
            gameOver(false, `GAME OVER! You lost. The correct number was ${winNum}.`);
        }
        else {
            inputNum.style.border = '2px solid red';

            inputNum.value = "";
            inputNum.focus();
            setMessage(`${guessNum} is incorrect. Guesses Left: ${guessLeft}`, 'red');
        }
    }
}

function gameOver(won, msg) {
    inputNum.disabled = `${won}`;
    
    let color;
    won === true ? color = 'green' : color = 'red';
    inputNum.style.borderColor = color;
    setMessage(msg, color);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}