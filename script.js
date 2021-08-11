let playerScore = 0;
let computerScore = 0;
const compScore = document.querySelector('#computerScore');
const playScore = document.querySelector('#playerScore');
const res = document.querySelector('#result');
const images = document.querySelectorAll('img');
const options = document.querySelectorAll('.active');
const end = document.querySelector('#game-end');
const restart = document.querySelector('#restart');
const btn = document.querySelector('button');
let gameon = true;
function computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;
    if(a == 1) {
        return 'Rock';
    } else if(a == 2) {
        return 'Paper';
    } return 'Scissors';
}
function playRound(playerSelection, computerSelection) {
    if((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if((playerSelection == 'Rock' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if(playerSelection == computerSelection) {
        return `It's a Tie!`;
    } return "Invalid Input";
}
function handleResult(result) {
    if(result.substring(0, result.indexOf('!')) == 'You Win') {
        playerScore++;
        playScore.textContent = `Player: ${playerScore}`;
    } else if(result.substring(0, result.indexOf('!')) == 'You Lose') {
        computerScore++;
        compScore.textContent = `Computer: ${computerScore}`;
    }
}
function endgame(){
    if(playerScore < 5 && computerScore < 5) {
        return;
    }
    if(playerScore > computerScore) {
        end.textContent = 'Congratulations! You have emerged victorious!';
    } else {
        end.textContent = 'I am sorry. You have failed to defeat your opponent';
    }
    images.forEach((img) => {
        img.classList.remove('active');
    })
    gameon = false;
    restart.textContent = 'Do you wish to restart?';
    btn.removeAttribute('id');
    btn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        images.forEach((img => {
            img.classList.add('active');
        }));
        end.textContent = '';
        restart.textContent = '';
        res.textContent = '';
        playScore.textContent = 'Player: 0';
        compScore.textContent = 'Computer: 0';
        btn.setAttribute('id', 'hide');
        gameon = true;
    });
}
function game() {
    let player;
    options.forEach((img) => {
            img.addEventListener('click', function(e) {
            if(gameon) {
                let computer = computerPlay();
                if(e.target.id === 'rock') {
                    player = 'Rock';
                } else if(e.target.id === 'paper') {
                    player = 'Paper';
                } else {
                    player = 'Scissors';
                }
                let result = playRound(player, computer);
                res.textContent = result;
                handleResult(result);
                endgame();
            }
        });
    });
}
game();