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
