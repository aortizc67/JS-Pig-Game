/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; // 0 first player and 1 second player

// change the style of an element, Example: hiding the image
document.querySelector('.dice').style.display = 'none';

// Set the scores to 0
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;

// When the button is clicked
document.querySelector('.btn.btn--roll').addEventListener('click', function(){
    // 1) Random number
    var dice = Math.floor(Math.random() * 6 ) + 1;

    // 2) Display the image of the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3) Update the round score IF the rolled number was NOT a 1
    if (dice !== 1)
    {
        // add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }
    else
    {
        // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0

        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player.player--0').classList.toggle("player--active");
        document.querySelector('.player.player--1').classList.toggle("player--active");

        document.querySelector('.dice').style.display = 'none';
    }
})

// We deleted the number and instead concatenated the variable which will determine the player                      
//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// Read elements from the DOM
//var x = document.querySelector('#score--0').textContent;
//console.log(x);