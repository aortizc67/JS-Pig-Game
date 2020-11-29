/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
- The first player to reach 100 points on GLOBAL score wins the game.
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

// When the button Roll is clicked
document.querySelector('.btn.btn--roll').addEventListener('click', function(){
    if (gamePlaying){
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
            nextPlayer();
        }
    }
});

// When the user click hold
document.querySelector('.btn.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        // Save the score to the correct player, by storing in it in our array
        scores[activePlayer] += roundScore;

        // display that score
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

        // Check if player won
        if(scores[activePlayer] >= 20){
            document.querySelector("#name--" + activePlayer).textContent = 'Winner!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add("player--winner");
            document.querySelector('.player--' + activePlayer).classList.remove("player--active");
            gamePlaying = false;
        }
        else
        {
            // Next Player
            nextPlayer();
        }
    }
});

// new game
document.querySelector(".btn.btn--new").addEventListener('click', init);

function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player.player--0').classList.toggle("player--active");
    document.querySelector('.player.player--1').classList.toggle("player--active");

    document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // 0 first player and 1 second player
    gamePlaying = true;

    // change the style of an element, Example: hiding the image
    document.querySelector('.dice').style.display = 'none';

    // Set the scores to 0
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    document.getElementById("name--0").textContent = 'Player 1';
    document.getElementById("name--1").textContent = 'Player 2';

    document.querySelector('.player--0').classList.remove("player--winner");
    document.querySelector('.player--0').classList.remove("player--active");
    document.querySelector('.player--0').classList.add("player--active");

    document.querySelector('.player--1').classList.remove("player--winner");
    document.querySelector('.player--1').classList.remove("player--active");
}

// We deleted the number and instead concatenated the variable which will determine the player                      
//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// Read elements from the DOM
//var x = document.querySelector('#score--0').textContent;
//console.log(x);