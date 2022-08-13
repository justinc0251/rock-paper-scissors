function getComputerChoice(number)
{
    if(number == 0){
        return "Rock";
    }
    else if(number == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

let computerChoice = getComputerChoice(Math.floor(Math.random() * 3));

let playerSelection = prompt("Rock, Paper, or Scissors?");

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() == "rock")
        if(computerChoice == "Scissors")
            return "You Won! Rock beats Scissors";
        else if(computerChoice == "Paper")
            return "You Lose! Paper beats Rock";
        else
            return "Tie!";
}

playRound(playerSelection, computerChoice);