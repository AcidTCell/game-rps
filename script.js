let btnRock = document.querySelector('#rockselection');
let btnPaper = document.querySelector('#paperselection');
let btnScissor = document.querySelector('#scissorselection');
let container = document.querySelector('#container');
let tally = document.querySelector('#tally');



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
        
        let result = document.createElement('div');
        result.textContent = 'You win, rock beats scissors!'
        container.appendChild(result);
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        let result = document.createElement('div');
        result.textContent = 'You win, paper beats rock!'
        container.appendChild(result);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        let result = document.createElement('div');
        result.textContent = 'You win, scissors beats paper!'
        container.appendChild(result);
    }
    else if (playerSelection === computerSelection){
        let result = document.createElement('div');
        result.textContent = 'It is a DRAW'
        container.appendChild(result);
    }
    else {
        let result = document.createElement('div');
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        container.appendChild(result);

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



