let computerSelection = '';
let playerInput = prompt('Choose: ');
let playerSelection = playerInput.toLowerCase();
console.log(playerSelection)

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    
    if (randomNumber === 0){
        return 'Rock';
    }
    else if (randomNumber === 1){
        return 'Paper';
    }
    else if (randomNumber === 2){
        return 'Scissors';
    }
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){


}