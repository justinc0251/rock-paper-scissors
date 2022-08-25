// Global Variables

let playerScore = 0;
let computerScore = 0;
let playerWin = false;

// Helper function to determine computer choice

function getComputerChoice()
{
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "rock";
    }
    else if(random === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// Returns whether user won, lost, or tied with computer

function playRound(playerSelection, computerChoice)
{
    if(playerSelection.toLowerCase() == "rock")
    {
        if(computerChoice == "Scissors")
        {
            playerWin = true;
        }
        else if(computerChoice == "Paper")
        {
            playerWin = false;
        }
        else
        {
            playerWin = 'tie';
        }
    }

    else if(playerSelection.toLowerCase() == "paper")
    {
        if(computerChoice == "Scissors")
        {
            playerWin = false;
        }
        else if(computerChoice == "Paper")
        {
            playerWin = 'tie';
        }
        else
        {
            playerWin = true;
        }
    }

    else if(playerSelection.toLowerCase() == "scissors")
    {
        if(computerChoice == "Scissors")
        {
            playerWin = 'tie';
        }
        else if(computerChoice == "Paper")
        {
            playerWin = true;
        }
        else
        {
            playerWin = false;
        }
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    })
})

function game(playerSelection)
{
    const computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
}

const results = document.getElementById("results");

