function computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;
    if(a == 1) {
        return 'Rock';
    } else if(a == 2) {
        return 'Paper';
    } return 'Scissors';
}
function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    if((playerMove == 'Rock' && computerSelection == 'Scissors') || (playerMove == 'Paper' && computerSelection == 'Rock') || (playerMove == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerMove} beats ${computerSelection}.`;
    } else if((playerMove == 'Rock' && computerSelection == 'Paper') || (playerMove == 'Paper' && computerSelection == 'Scissors') || (playerMove == 'Scissors' && computerSelection == 'Rock')) {
        return `You Lose! ${computerSelection} beats ${playerMove}.`;
    } else if(playerMove == computerSelection) {
        return `It's a Tie!`;
    } return "Invalid Input";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let a = 0; a < 5; a++) {
        let player = prompt("Rock, Paper, or Scissors?");
        let computer = computerPlay();
        let result = playRound(player, computer);
        if(result.substring(0, result.indexOf('!')) == 'You Win') {
            playerScore++;
        } else if(result.substring(0, result.indexOf('!')) == 'You Lose') {
            computerScore++;
        }
        console.log(`${result} \n Player: ${playerScore} Computer: ${computerScore}`);
    }
    let winner;
    if(playerScore > computerScore) {
        winner = 'Player';
    } else if(playerScore < computerScore) {
        winner = 'Computer';
    } else {
        winner = 'No one';
    }
    console.log(`${winner} has won the game!`);
}
game();