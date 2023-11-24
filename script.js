let computerSelection = '';
let userSelection = '';

function getUserChoice(){
    let playerInput = prompt('Choose: ');
    let playerSelection = playerInput.toLowerCase();
    return playerSelection;
}



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
    else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        return 'You Win! Scissor beats Paper';
    }
    else if (playerSelection === computerSelection){
        return "It's a Draw";
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}



function game(){
    let counter = 0;
    let playerPoint = 0;
    let computerPoint = 0;
    while (counter < 5){
        computerSelection = getComputerChoice();
        playerSelection = getUserChoice();
        console.log('User: '+ playerSelection);
        console.log('Computer: '+ computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        result = playRound(playerSelection, computerSelection);
        if (result.includes('Win')){
            playerPoint += 1;
            counter += 1;
        }
        else if (result.includes('Lose')){
            computerPoint += 1;
            counter += 1;
        }
        else if (result.includes('Draw')){
            counter += 1;
        }
      console.log(playerPoint);
      console.log(computerPoint);  
    }
    if (playerPoint > computerPoint){
        return 'You are the overall CHAMPION!'
    }
    else if (playerPoint === computerPoint){
        return 'It is a fucking DRAW'
    }
    else {
        return 'You Lost, LOSER!'
    }
}

console.log(game());