// Global Variables

let roundWin = "";
let playerScore = 0;
let computerScore = 0;

// Helper function to determine computer choice

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Returns whether user won, lost, or tied with computer and increments score based on winner

function playRound(playerSelection, computerChoice) {
  if (playerSelection === "rock") {
    if (computerChoice === "scissors") {
      roundWin = "player";
      playerScore++;
    } else if (computerChoice === "paper") {
      roundWin = "computer";
      computerScore++;
    } else {
      roundWin = "tie";
    }
  }

  if (playerSelection === "paper") {
    if (computerChoice === "scissors") {
      roundWin = "computer";
      computerScore++;
    } else if (computerChoice === "paper") {
      roundWin = "tie";
    } else {
      roundWin = "player";
      playerScore++;
    }
  }

  if (playerSelection === "scissors") {
    if (computerChoice === "scissors") {
      roundWin = "tie";
    } else if (computerChoice === "paper") {
      roundWin = "player";
      playerScore++;
    } else {
      roundWin = "computer";
      computerScore++;
    }
  }
}

// Click listeners for group of button nodes, returns nothing if player or computer already reached 5 points
const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (playerScore == 5 || computerScore == 5) {
      return;
    }
    game(button.id);
  });
});

// Restart button to reset scores and apply default messages
const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", () => {
  scoreInfo.textContent = "First to Five Wins!";
  playerScore = 0;
  computerScore = 0;
  scorePlayer.textContent = "Player: 0";
  scoreComputer.textContent = "Computer: 0";
  results.textContent = "Good Luck!";
});

// Get elements from html file
const results = document.getElementById("results");
const displayPlayer = document.getElementById("player");
const displayComputer = document.getElementById("computer");
const scorePlayer = document.getElementById("scorePlayer");
const scoreComputer = document.getElementById("scoreComputer");
const scoreInfo = document.getElementById("score-info");

function game(playerSelection) {
  const computerChoice = getComputerChoice();
  displayChoice(playerSelection, computerChoice);
  playRound(playerSelection, computerChoice);
  displayRoundWinner(playerSelection, computerChoice);
  displayScore(playerScore, computerScore);
  displayWinner(playerScore, computerScore);
}

// Capitalize first letter helper function
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to show who won in the round
function displayRoundWinner(playerSelection, computerChoice) {
  if (roundWin === "player") {
    results.textContent = `You won! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerChoice)}`;
  }
  if (roundWin === "computer") {
    results.textContent = `You lost! ${capitalizeFirstLetter(playerSelection)} loses to ${capitalizeFirstLetter(computerChoice)}`;
  }
  if (roundWin === "tie") {
    results.textContent = `You tied! ${capitalizeFirstLetter(playerSelection)} ties with ${capitalizeFirstLetter(computerChoice)}`;
  }
}

// Helper function to show what the player and computer picked
function displayChoice(playerSelection, computerChoice) {
  displayPlayer.textContent = `Player: ${capitalizeFirstLetter(playerSelection)}`;
  displayComputer.textContent = `Computer: ${capitalizeFirstLetter(computerChoice)}`;
}

// Helper function to show the player and computer score
function displayScore(playerScore, copmuterScore) {
  scorePlayer.textContent = `Player: ${playerScore}`;
  scoreComputer.textContent = `Computer: ${computerScore}`;
}

// Helper function to display who got to five points first
function displayWinner(playerScore, computerScore) {
  if (playerScore == 5) {
    scoreInfo.textContent = "Congratulations! You Won!";
  }
  if (computerScore == 5) {
    scoreInfo.textContent = "You Lost :( Try Again!";
  }
}
