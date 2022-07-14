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

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//Starting condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function() {
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
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        //document.getElementById(`current--${activePlayer}`).style = 
    }
});


