'use strict';

//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

init();

const switchPlayer =  function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
   if(playing) {
     //1. generating random dice roll
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    //2. display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    //3. checked for roll 1
    if(diceRoll !== 1) {
        // add dice to current score
        currentScore += diceRoll;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // switch to next player
        switchPlayer();
        //document.getElementById(`current--${activePlayer}`).style = 
    }
}
});

btnHold.addEventListener('click', function() {
    if(playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;      // scores[0] = scores[0] + currentScore; // activeplayer can be 0 or 1
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. check if score is >= 100

    // if score >= 100 finish the game
    if(scores[activePlayer] >= 100) {
        playing = false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        // else switch to next player
        switchPlayer();
    }
}
});

btnNew.addEventListener('click', init );