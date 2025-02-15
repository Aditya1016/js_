let randNum = parseInt(Math.random() *100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGues = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid no")
        userInput.value = '';
    } else if(guess < 1){
        alert("Please enter a num greater than 1")
        userInput.value = '';
    } else if(guess > 100){
        alert("Please enter a num lesset than 100")
        userInput.value = '';
    } else{
        prevGues.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randNum){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randNum){
        displayMessage(`Num is too low`)
    }else {
        displayMessage(`Num is too high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randNum = parseInt(Math.random() *100 + 1);
        prevGues = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled','')
        startOver.removeChild(p)
        displayMessage('')
        playGame = true;
    })

}



