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
        results.textContent = 'You won!';
    }
    if(roundWin === 'computer')
    {
        results.textContent = 'You lost!';
    }
    if(roundWin === 'tie')
    {
        results.textContent = 'You tied!';
    }

}


