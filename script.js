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
    let message = '';
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        
        let result = document.createElement('div');
        result.textContent = 'You win, rock beats scissors!'
        container.appendChild(result);
        message = result.textContent;
        return message;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        let result = document.createElement('div');
        result.textContent = 'You win, paper beats rock!'
        container.appendChild(result);
        message = result.textContent;
        return message;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        let result = document.createElement('div');
        result.textContent = 'You win, scissors beats paper!'
        container.appendChild(result);
        message = result.textContent;
        return message;
    }
    else if (playerSelection === computerSelection){
        let result = document.createElement('div');
        result.textContent = 'It is a DRAW'
        container.appendChild(result);
        message = result.textContent;
        return message;
    }
    else {
        let result = document.createElement('div');
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        container.appendChild(result);
        message = result.textContent;
        return message;

    }
}

function updateTally(playerCounter, botCounter) {
    tally.textContent = `Player: ${playerCounter} - Bot: ${botCounter}`;
    container.appendChild(tally);
  }



function game(){
    let playerCounter = 0;
    let botCounter = 0;
    

    btnRock.addEventListener('click', function () {
        let computerChoice = getComputerChoice();
        let finish = playRound('rock', computerChoice);
        if (finish.includes('You win')) {
            playerCounter++;
        } else if (finish.includes('You lose')) {
            botCounter++;
        }
        if (playerCounter === 5){
            let winner = document.createElement('div');
            winner.textContent = 'YOU ARE THE WINNER';
            tally.appendChild(winner);
          }
        else if (botCounter === 5){
            let winner = document.createElement('div');
            winner.textContent = 'YOU LOSE';
            tally.appendChild(winner);
          };
        console.log(playerCounter);
        console.log(botCounter);
        

      });
    
    btnPaper.addEventListener('click', function () {
        let computerChoice = getComputerChoice();
        let finish = playRound('paper', computerChoice);
        if (finish.includes('You win')) {
            playerCounter++;
        } else if (finish.includes('You lose')) {
            botCounter++;
        }
        console.log(playerCounter);
        console.log(botCounter);
        if (playerCounter === 5){
            let winner = document.createElement('div');
            winner.textContent = 'YOU ARE THE WINNER';
            tally.appendChild(winner);
          }
        else if (botCounter === 5){
            let winner = document.createElement('div');
            winner.textContent = 'YOU LOSE';
            tally.appendChild(winner);
          };
        

      });
    
    btnScissor.addEventListener('click', function () {
        let computerChoice = getComputerChoice();
        let finish = playRound('scissors', computerChoice);
        if (finish.includes('You win')) {
            playerCounter++;
        } else if (finish.includes('You lose')) {
            botCounter++;
        }
        console.log(playerCounter);
        console.log(botCounter);
        if (playerCounter === 5){
            let winner = document.createElement('div');
            winner.textContent = 'YOU ARE THE WINNER';
            tally.appendChild(winner);
            return;
          }
        else if (botCounter === 5){
            let winner = document.createElement('div');
            winner.textContent = 'YOU LOSE';
            tally.appendChild(winner);
            return;
          };
        
    
      });
      
}



game();



