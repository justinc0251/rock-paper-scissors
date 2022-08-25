// Global Variables

let computerChoice = '';
let playerSelection = '';
let playerScore = 0;
let computerScore = 0;
let playerWin = false;

// Helper function to determine computer choice

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "Rock";
    }
    else if(random === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

// Returns whether user won, lost, or tied with computer

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() == "rock")
    {
        if(computerChoice == "Scissors")
        {
            playerWin = true;
            return "You Won! Rock beats Scissors";
        }
        else if(computerChoice == "Paper")
        {
            playerWin = false;
            return "You Lose! Paper beats Rock";
        }
        else
            return "Tie!"; 
    }

    else if(playerSelection.toLowerCase() == "paper")
    {
        if(computerChoice == "Scissors")
        {
            playerWin = false;
            return "You Lose! Scissors beats Paper";
        }
        else if(computerChoice == "Paper")
            return "Tie!";
        else
        {
            playerWin = true;
            return "You Won! Paper beats Rock";
        }
    }

    else if(playerSelection.toLowerCase() == "scissors")
    {
        if(computerChoice == "Scissors")
            return "Tie!";
        else if(computerChoice == "Paper")
        {
            playerWin = true;
            return "You Won! Scissors beats Rock";
        }
        else
        {
            playerWin = false;
            return "You Lose! Rock beats Scissors";
        }
    } else {
        return "Invalid choice. You Lose!";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
})
