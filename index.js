function computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;
    if(a == 1) {
        return 'Rock';
    } else if(a == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase();
    if((playerMove == 'Rock' && computerSelection == 'Scissors') || (playerMove == 'Paper' && computerSelection == 'Rock') || (playerMove == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerMove} beats ${computerSelection}`;
    } else if((playerMove == 'Rock' && computerSelection == 'Paper') || (playerMove == 'Paper' && computerSelection == 'Scissors') || (playerMove == 'Scissors' && computerSelection == 'Rock')) {
        return `You Lose! ${computerSelection} beats ${playerMove}`;
    } else if(playerMove == computerSelection) {
        return `It's a Tie!`;
    } else {
        return "Invalid Input";
    }
}

function game() {
    for(let a = 0; a < 5; a++) {
        let player = prompt("Rock, Paper, or Scissors?");
        let computer = computerPlay();
        console.log(playRound(player, computer));
    }
}
game();