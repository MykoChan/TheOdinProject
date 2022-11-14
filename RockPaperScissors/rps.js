const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `Tie! Both players chose ${playerSelection}!`;
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) 
    {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) 
    {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }
}

// for (let pc of choices) {
//     for (let cc of choices) {
//         console.log(playRound(pc, cc))
//     }
// }

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = "";
        while (!choices.includes(playerChoice.toLowerCase())) {
            playerChoice = prompt("Rock, paper or scissors?");
        }
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game();