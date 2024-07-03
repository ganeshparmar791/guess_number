const submit = document.querySelector('#subt');
let guessedNumberfield = document.querySelector('.guessField');
const startOver = document.querySelector('.resultParas');
let random = Math.round(Math.random() * 100 + 1);
let prevguess = document.querySelector('.guesses');
let guessremaining = document.querySelector('.lastResult');
let leftguesses = 1;
// console.log(random);
const p = document.createElement('p');
let result = document.querySelector('.lowOrHi');
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(guessedNumberfield.value);

        validateGuess(guess);
        guessedNumberfield.value = '';
        guessremaining.innerHTML = 10 - leftguesses;
        leftguesses++;

        if (leftguesses > 10) {
            playGame = false;
            result.innerHTML = `Guesses over... the answer is ${random}`;
            endGame();
            // console.log('inside')
            //   submit.disabled = true;
            //   guessedNumberfield.disabled = true;
        }
    });
}

function validateGuess(guess) {
    if (guess > 100 || guess < 1 || isNaN(guess)) {
        alert('guess a valid value');
    } else {
        checkguess(guess);
    }
}

function checkguess(guess) {
    prevguess.innerHTML += `${guess}  `;
    if (guess == random) {
        result.innerHTML = 'You guessed it right';
        // submit.disabled = true;
        // guessedNumberfield.disabled = true;
        endGame();
    } else if (guess > random) result.innerHTML = 'Guess is too high';
    else result.innerHTML = 'Guess is too low';
}




function endGame() {
    guessedNumberfield.value = '';
    guessedNumberfield.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    // console.log('inside end game')
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        // console.log('inside new game')

        random = parseInt(Math.random() * 100 + 1);

        leftguesses = 0;
        prevguess.innerHTML = '';
        guessremaining.innerHTML = `${10 - leftguesses} `;
        result.innerHTML = ''
        startOver.removeChild(p);

        submit.disabled = false;
        guessedNumberfield.disabled = false;

        playGame = true;
    });
}