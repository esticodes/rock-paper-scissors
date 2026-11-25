function getComputerChoice(){
    let number = Math.random();
    if (number <= 0.33){
        return("rock");
    }
    if (number <= 0.66){
        return("paper");
    }
    else{
        return("scissors");
    }
}

function getHumanChoice(){
    let choice = prompt("rock, paper, scissors, choose!");
    choice = choice.toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("rock, paper, scissors, choose!");
        choice = choice.toLowerCase();
    }

    return(choice);
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        console.log("Computer choice: " + computerChoice);
        console.log("Your choice: " + humanChoice);
        if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                console.log("It's a tie!");
            }
            else if(computerChoice === "paper"){
                console.log("You lose! Paper beats rock");
                computerScore += 1;
            }
            else{
                console.log("You win! Rock beats scissors");
                humanScore += 1;
            }
        }
        else if (humanChoice === "paper"){
            if (computerChoice === "paper"){
                console.log("It's a tie!");
            }
            else if(computerChoice === "scissors"){
                console.log("You lose! Scissors beat paper");
                computerScore += 1;
            }
            else{
                console.log("You win! Paper beats rock");
                humanScore += 1;
            }
        }
        else {
            if (computerChoice === "scissors"){
                console.log("It's a tie!");
            }
            else if(computerChoice === "rock"){
                console.log("You lose! Rock beats scissors");
                computerScore += 1;
            }
            else{
                console.log("You win! Scissors beat paper");
                humanScore += 1;
            }
        }
    }

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
        
}

console.log(playGame())
