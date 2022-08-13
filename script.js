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

let computerChoice;
let playerSelection;
let playerScore;
let computerScore;
let playerWin;
let computerWin;

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() == "rock")
    {
        if(computerChoice == "Scissors")
        {
            playerWin = 1;
            return "You Won! Rock beats Scissors";
        }
        else if(computerChoice == "Paper")
        {
            computerWin = 1;
            return "You Lose! Paper beats Rock";
        }
        else
            return "Tie!";
    }

    else if(playerSelection.toLowerCase() == "paper")
    {
        if(computerChoice == "Scissors")
        {
            computerWin = 1;
            return "You Lose! Scissors beats Paper";
        }
        else if(computerChoice == "Paper")
            return "Tie!";
        else
        {
            playerWin = 1;
            return "You Won! Paper beats Rock";
        }
    }

    else if(playerSelection.toLowerCase() == "scissors")
    {
        if(computerChoice == "Scissors")
            return "Tie!";
        else if(computerChoice == "Paper")
        {
            playerWin = 1;
            return "You Won! Scissors beats Rock";
        }
        else
        {
            computerWin = 1;
            return "You Lose! Rock beats Scissors";
        }
    } else {
        return "Invalid choice. You Lose!";
    }
}

function game()
{
    for(let i = 0; i < 5; i++)
    {
        computerChoice = getComputerChoice(Math.floor(Math.random() * 3));
        playerSelection = prompt("Rock, Paper, or Scissors?");

        console.log("Computer picks " + computerChoice);

        console.log(playRound(playerSelection, computerChoice));
        if(playerWin == 1)
            playerScore++;
        if(computerWin == 1)
            computerScore++;

        console.log("Your Score: " + playerScore);
        console.log("Computer's Score: " + computerScore);

    }

    if(playerScore > computerScore)
        console.log("You won!");
    if(computerScore > playerScore)
        console.log("You lost!");
    else
        console.log("You tied!");
}

game();