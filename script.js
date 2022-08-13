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
    {
        if(computerChoice == "Scissors")
            return "You Won! Rock beats Scissors";
        else if(computerChoice == "Paper")
            return "You Lose! Paper beats Rock";
        else
            return "Tie!";
    }

    if(playerSelection.toLowerCase() == "paper")
    {
        if(computerChoice == "Scissors")
            return "You Lose! Scissors beats Paper";
        else if(computerChoice == "Paper")
            return "Tie!";
        else
            return "You Won! Paper beats Rock";
    }

    if(playerSelection.toLowerCase() == "scissors")
    {
        if(computerChoice == "Scissors")
            return "Tie!";
        else if(computerChoice == "Paper")
            return "You Won! Scissors beats Rock";
        else
            return "You Lose! Rock beats Scissors";
    }

}

console.log(playRound(playerSelection, computerChoice));
