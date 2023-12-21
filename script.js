let btnRock = document.querySelector('#rockselection');
let btnPaper = document.querySelector('#paperselection');
let btnScissor = document.querySelector('#scissorselection');


function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){
        return 'rock';
    }
    else if (randomNumber === 1){
        return 'paper';
    }
    else if (randomNumber === 2){
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win! Paper beats Rock'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win! Scissor beats Paper';
    }
    else if (playerSelection === computerSelection){
        return "It's a Draw";
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

btnRock.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    console.log(playRound('rock', computerChoice));
  });

  btnPaper.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    console.log(playRound('paper', computerChoice));
  });

  btnScissor.addEventListener('click', function () {
    let computerChoice = getComputerChoice();
    console.log(playRound('scissors', computerChoice));
  });



