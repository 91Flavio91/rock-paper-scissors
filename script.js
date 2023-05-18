const getPlayerChoice = function () {
    const playerChoice = prompt('Make your choice: Rock, Paper or Scissors?').toLowerCase();

    return playerChoice;
}


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