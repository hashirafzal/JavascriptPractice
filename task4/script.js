let num = Math.round(Math.random() * 100 + 1);

const guess = document.querySelector('#guessField');

const submit = document.querySelector('#subt');

const preGuess = document.querySelector('.guesses');

let remainGuesses = document.querySelector('.lastResult');

const lowHigh = document.querySelector('.lowOrHi');

const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let remainingGuess = 10;

let game = true;

if (game) {
  if(remainingGuess > 0) { 
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessVal = parseInt(guess.value);
    
    validateGuess(guessVal);
  });
}
}

function validateGuess(vGuess) {
  if(remainingGuess < 1) { 
    alert("Please Start a New Game 🥺");
      }
  else if (vGuess < 1 || vGuess > 100 || isNaN(vGuess)) {
    guess.value = ' ';
    alert('Please Input a Valid Number 🤔');
  } else {
    prevGuess.push(vGuess);
    displayGuess(vGuess);
    if (remainingGuess === 0) {
      displayMsg(`Game Over ☠️. Answer was ${num}`);
      endGame();
    } else {
      checkGuess(vGuess);
    }
  }
}

function checkGuess(cGuess) {
  if (cGuess === num) {
    displayMsg(`Congrats👏.You Guess the Right 😍 `);
    endGame();
  } else if (cGuess < num) {
    displayMsg(`Try guessing a larger Number🤓 ;)`);
  } else {
    displayMsg(`Try guessing a smaller number🧐 :)`);
  }
}

function displayGuess(dGuess) {
  guess.value = ' ';
  preGuess.innerHTML += `${dGuess},`;
  remainingGuess--;
  remainGuesses.innerHTML = `${remainingGuess}`;
}

function displayMsg(message) {
  lowHigh.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  guess.value = ' ';
  guess.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id='newGame'>New Game</button>`;
  
  resultParas.appendChild(p);
  game = false;
  NewGame();
}

function NewGame() {
  const newGame = document.getElementById('newGame');
  newGame.addEventListener('click', (e) => {
    num = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    preGuess.innerHTML = '';
    remainingGuess = 10;
    remainGuesses.innerHTML = `${remainingGuess}`;
    game = true;
    lowHigh.innerHTML = '';
    guess.removeAttribute('disabled', '');
    resultParas.removeChild(p);
  });
}
