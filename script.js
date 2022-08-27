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

// Returns whether user won, lost, or tied with computer

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

// Click listeners for group of button nodes
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});

const results = document.getElementById("results");
const displayPlayer = document.getElementById("player");
const displayComputer = document.getElementById("computer");
const scorePlayer = document.getElementById("scorePlayer");
const scoreComputer = document.getElementById("scoreComputer");
const scoreInfo = document.getElementById("score-info");

function game(playerSelection) {
  const computerChoice = getComputerChoice();
  displayPlayer.textContent = `Player: ${capitalizeFirstLetter(
    playerSelection
  )}`;
  displayComputer.textContent = `Computer: ${capitalizeFirstLetter(
    computerChoice
  )}`;
  playRound(playerSelection, computerChoice);
  displayWinner(playerSelection, computerChoice);
  scorePlayer.textContent = `Player: ${playerScore}`;
  scoreComputer.textContent = `Computer: ${computerScore}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayWinner(playerSelection, computerChoice) {
  if (roundWin === "player") {
    results.textContent = `You won! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${capitalizeFirstLetter(computerChoice)}`;
  }
  if (roundWin === "computer") {
    results.textContent = `You lost! ${capitalizeFirstLetter(
      playerSelection
    )} loses to ${capitalizeFirstLetter(computerChoice)}`;
  }
  if (roundWin === "tie") {
    results.textContent = `You tied! ${capitalizeFirstLetter(
      playerSelection
    )} ties with ${capitalizeFirstLetter(computerChoice)}`;
  }
}
