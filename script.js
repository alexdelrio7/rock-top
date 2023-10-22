
const rpsArray = ["rock", "paper", "scissors"]
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const arrayPosition = Math.floor(Math.random()*rpsArray.length)
    return rpsArray[arrayPosition]
}

for (i=0; i<5; i++) {
    let computerSelection = getComputerChoice(rpsArray)
    let playerSelection = prompt("please enter");
    
    function getWinner (computerSelection, playerSelection) {
        if (computerSelection == playerSelection) {
            return "It's a tie!";
        } else if (computerSelection == "paper" && playerSelection == "rock" || 
                   computerSelection == "rock" && playerSelection == "scissors" ||
                   computerSelection == "scissors" && playerSelection == "paper") {
            return "Computer wins!";
        } else if (playerSelection == "paper" && computerSelection == "rock" || 
                   playerSelection == "rock" && computerSelection == "scissors" ||
                   playerSelection == "scissors" && computerSelection == "paper") {
            return "Player wins!";
        }
    }
    let winnerResult = getWinner(computerSelection, playerSelection)
    console.log("Game" + (i+1) + ":" + winnerResult + " Computer selected: " + computerSelection + ", player selected: " + playerSelection)

    if (winnerResult === "Computer wins!") {
        computerWins += 1;
      } else if (winnerResult === "Player wins!") {
        playerWins += 1;
      }

}

function getMatchWinner (playerWins, computerWins) {
        if (playerWins == computerWins) {
            return "The match is a tie!"
        } else if (playerWins > computerWins) {
            return "Match won by player"
        } else if (computerWins > playerWins) {
            return "Match won by computer"
        }
}

console.log("Player wins: " + playerWins)
console.log("Computer wins: " + computerWins)

let matchResult = getMatchWinner (playerWins, computerWins)
console.log(matchResult)
