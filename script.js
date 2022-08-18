// Global Variables

let computerChoice;
let playerSelection;
let playerScore;
let computerScore;
let playerWin;
let computerWin;

// Helper function to determine computer choice

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
            computerWin = true;
            return "You Lose! Paper beats Rock";
        }
        else
            return "Tie!"; 
    }

    else if(playerSelection.toLowerCase() == "paper")
    {
        if(computerChoice == "Scissors")
        {
            computerWin = true;
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
            computerWin = true;
            return "You Lose! Rock beats Scissors";
        }
    } else {
        return "Invalid choice. You Lose!";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice(Math.floor(Math.random() * 3)));
    })
})



// Runs playRound function five times while showing who wins at the end
/*
function game()
{
    playerScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        computerChoice = getComputerChoice(Math.floor(Math.random() * 3));
        playerSelection = prompt("Rock, Paper, or Scissors?");

        console.log("Computer picks " + computerChoice);

        console.log(playRound(playerSelection, computerChoice));

        if(playerWin == true)
            playerScore++;
        if(computerWin == true)
            computerScore++;

        playerWin = false;
        computerWin = false;

        console.log("Your Score: " + playerScore);
        console.log("Computer's Score: " + computerScore);
        console.log("\n");
    }

    if(playerScore > computerScore)
        console.log("You won!");
    if(computerScore > playerScore)
        console.log("You lost!");
    else
        console.log("You tied!");
}

game();
*/