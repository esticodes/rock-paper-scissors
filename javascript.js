function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            results.textContent ="It's a tie!";
        }
        else if(computerChoice === "paper"){
            results.textContent ="You lose! Paper beats rock";
            computerScore += 1;
        }
        else{
            results.textContent ="You win! Rock beats scissors";
            humanScore += 1;
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "paper"){
            results.textContent ="It's a tie!";
        }
        else if(computerChoice === "scissors"){
            results.textContent ="You lose! Scissors beat paper";
            computerScore += 1;
        }
        else{
            results.textContent ="You win! Paper beats rock";
            humanScore += 1;
        }
    }
    else {
        if (computerChoice === "scissors"){
            results.textContent ="It's a tie!";
        }
        else if(computerChoice === "rock"){
            results.textContent ="You lose! Rock beats scissors";
            computerScore += 1;
        }
        else{
            results.textContent ="You win! Scissors beat paper";
            humanScore += 1;
        }
    }

    results.innerHTML += `
        <p>Human score: ${humanScore}</p>
        <p>Computer score: ${computerScore}</p>
    `;

    if (humanScore === 5) {
        results.innerHTML += "<h2>You won the game!</h2>";
    }

    if (computerScore === 5) {
        results.innerHTML += "<h2>Computer won the game!</h2>";
    }
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (humanScore === 5 || computerScore === 5) {
            return;
        }
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    })
})

