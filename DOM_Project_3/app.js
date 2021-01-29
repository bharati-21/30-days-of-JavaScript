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

let min = 1, max = 10, winNum = getRandomNumber(min, max), guessLeft = 3;


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listener to reload the page and restart
game.addEventListener('mousedown', playAgainListener);

function playAgainListener(e) {

    // Loads the page if submitBtn has class Play again (that is if the user has lost or won the game)
    if(e.target.classList.contains('play-again')) {
        window.location.reload();
    }
}

// Event Listener for submitBtn
submitBtn.addEventListener('click', checkNum);

// function to check if the guessNum entered by the user is equal to the winNum
function checkNum(e) {
    e.preventDefault();

    let guessNum = parseInt(inputNum.value);

    // Validate input to check if the input box is empty and if it falls outside the range of min, max
    if(Number.isNaN(guessNum) || guessNum < min || guessNum > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    /// Check if the guessNum entered by user is equal to winNum
    else if(guessNum == winNum) {
        gameOver(true, `Hurray, YOU WON! The number is ${winNum}`);
    }

    // If the guessNum entered by user is not equal to winNum
    else {

        // decrease the number of guesses
        guessLeft-=1;
        
        // If the user used up all the guesses, indicate user lost
        if(guessLeft === 0) {
            gameOver(false, `GAME OVER! You lost. The correct number was ${winNum}.`);
        }

        // If the guesses are left, indicate guessNum is incorrect and number of guesses left
        else {
            inputNum.style.border = '2px solid red';
            inputNum.value = "";
            inputNum.focus();
            setMessage(`${guessNum} is incorrect. Guesses Left: ${guessLeft}`, 'red');
        }
    }
}

// Function that prints the message for Game over (won or lost cases)
function gameOver(won, msg) {
    inputNum.disabled = `${won}`;
    
    // set color for the text box to indicate red as game lost and green as game won
    let color;
    won === true ? color = 'green' : color = 'red';
    inputNum.style.borderColor = color;
    setMessage(msg, color);

    // Change submit button content to 'Play Again' 
    submitBtn.value = 'Play Again';
    submitBtn.className += 'play-again';
    console.log(submitBtn);
    
}


// Function that sets content to message <p>
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


// Function to generate random number for winNum
function getRandomNumber(min, max) {
    let ranNum = Math.floor(Math.random() * (max - min + 1) + min);

    console.log(ranNum);
    return ranNum;
}