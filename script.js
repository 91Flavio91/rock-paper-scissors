const choices = document.querySelectorAll('.buttons div');


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

    return winner;
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