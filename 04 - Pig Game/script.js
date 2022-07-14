'use strict';

//Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;


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
        current0.textContent = currentScore;
    } else {
        // switch to next player
    }
});


