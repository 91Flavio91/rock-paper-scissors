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