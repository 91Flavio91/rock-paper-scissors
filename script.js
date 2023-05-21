const choices = document.querySelectorAll('.buttons div');
const getPlayerChoice = function (e) {
    const playerChoice = e.target.innerText.toLowerCase();
    console.log(playerChoice);

    playRound(playerChoice, getComputerChoice());
}

choices.forEach(function (choice) {
    choice.addEventListener('mouseenter', function () {
        this.classList.add('button-mouseenter')
    });
})
choices.forEach(function (choice) {
    choice.addEventListener('mouseleave', function () {
        this.classList.remove('button-mouseenter')
    });
})
choices.forEach(function (choice) {
    choice.addEventListener('click', getPlayerChoice);
});



// const getPlayerChoice = function () {
//     const playerChoice = prompt('Make your choice: Rock, Paper or Scissors?').toLowerCase();

//     return playerChoice;
// }


const getComputerChoice = function () {
    const rockChoice = 'rock';
    const paperChoice = 'paper';
    const scissorChoice = 'scissor';

    const computerChoice = Math.floor(Math.random() * 3) === 0 ? rockChoice :
        Math.floor(Math.random() * 3) === 1 ? paperChoice : scissorChoice;

    return computerChoice;
}


const playRound = function (playerChoice, computerChoice) {

    const winner = playerChoice === 'rock' && computerChoice === 'paper' ? 'You lose! Paper beats Rock!' :
        playerChoice === 'rock' && computerChoice === 'scissor' ? 'You win! Rock beats Scissor!' :
            playerChoice === 'paper' && computerChoice === 'rock' ? 'You win! Paper beats Rock!' :
                playerChoice === 'paper' && computerChoice === 'scissor' ? 'You lose! Scissor beats Paper!' :
                    playerChoice === 'scissor' && computerChoice === 'rock' ? 'You lose! Rock beats Scissor!' :
                        playerChoice === 'scissor' && computerChoice === 'paper' ? 'You win! Scissor beats Paper' : 'It\'s a tie!';

    checkWinner(winner, playerChoice, computerChoice);
}

const checkWinner = function (winner, playerChoice, computerChoice) {
    let playerScore = 0;
    let computerScore = 0;

    if (winner.slice(0, 7) === 'You win') playerScore++;
    else if (winner.slice(0, 8) === 'You lose') computerScore++;

    showResults(playerScore, computerScore, playerChoice, computerChoice);
}

const showResults = function (currentPlayerScore, currentComputerScore, playerChoice, computerChoice) {
    const playerScoreDiv = document.querySelector('.score .player-score');
    const computerScoreDiv = document.querySelector('.score .computer-score');

    if (currentPlayerScore > currentComputerScore) playerScoreDiv.innerText++;
    else if (currentComputerScore > currentPlayerScore) computerScoreDiv.innerText++;
    showChoice(playerChoice, computerChoice);

    if (playerScoreDiv.innerText === '5' || computerScoreDiv.innerText === '5') {
        showChoice(playerChoice, computerChoice);
        showFinalWinner(playerScoreDiv.innerText, computerScoreDiv.innerText);
    }
}

const showChoice = function (currentPlayerChoice, currentComputerChoice) {
    const playerChoiceDiv = document.querySelector('.choices-container .player-choice');
    const computerChoiceDiv = document.querySelector('.choices-container .computer-choice');

    playerChoiceDiv.innerText = currentPlayerChoice[0].toUpperCase() + currentPlayerChoice.slice(1);
    computerChoiceDiv.innerText = currentComputerChoice[0].toUpperCase() + currentComputerChoice.slice(1);
}

const showFinalWinner = function (playerScore, computerScore) {
    const finalWinnerDiv = document.querySelector('.choices-container .winner');
    finalWinnerDiv.className = 'winner';

    if (playerScore > computerScore) finalWinnerDiv.innerText = 'YOU WIN!!'
    else finalWinnerDiv.innerText = 'THE HOUSE WINS!!';
}


// const game = function (round) {
//     let playerScore = 0;
//     let computerScore = 0;

//     const checkWinner = function (winner) {
//         if (winner.slice(0, 7) === 'You win') {
//             playerScore++;
//         }
//         else if (winner.slice(0, 8) === 'You lose') {
//             computerScore++;
//         }
//     }

//     checkWinner(round(getPlayerChoice(), getComputerChoice()));
//     checkWinner(round(getPlayerChoice(), getComputerChoice()));
//     checkWinner(round(getPlayerChoice(), getComputerChoice()));
//     checkWinner(round(getPlayerChoice(), getComputerChoice()));
//     checkWinner(round(getPlayerChoice(), getComputerChoice()));


//     if (playerScore > computerScore) {
//         console.log('YOU WIN!!');
//     }
//     else if (playerScore < computerScore) {
//         console.log('YOU LOSE!!');
//     }
//     else {
//         console.log('IT\'S A TIE!!');
//     }
// }


// game(playRound);