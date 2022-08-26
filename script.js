// Global Variables

let roundWin = '';
let playerScore = 0;
let computerScore = 0;

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
    if(playerSelection == "rock")
    {
        if(computerChoice == "scissors")
        {
            roundWin = 'player';
        }
        else if(computerChoice == "paper")
        {
            roundWin = 'computer';
        }
        else
        {
            roundWin = 'tie';
        }
    }

    if(playerSelection == "paper")
    {
        if(computerChoice == "scissors")
        {
            roundWin = 'computer';
        }
        else if(computerChoice == "paper")
        {
            roundWin = 'tie';
        }
        else
        {
            roundWin = 'player';
        }
    }

    if(playerSelection === "scissors")
    {
        if(computerChoice === "scissors")
        {
            roundWin = 'tie';
        }
        else if(computerChoice == "paper")
        {
            roundWin = 'player';
        }
        else
        {
            roundWin = 'computer';
        }
    }
}

// Click listeners for group of button nodes
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    })
})

const results = document.getElementById("results");


function game(playerSelection)
{
    const computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
    if(roundWin === 'player')
    {
        results.textContent = `You won! ${playerSelection.toUpperCase} beats ${computerChoice}`;
    }
    if(roundWin === 'computer')
    {
        results.textContent = `You lost! ${computerChoice} beats ${playerSelection}`;
    }
    if(roundWin === 'tie')
    {
        results.textContent = `You tied! ${computerChoice} ties with ${playerSelection}`;
    }

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


