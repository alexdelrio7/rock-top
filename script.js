
const rpsArray = ["rock", "paper", "scissors"]
let playerWins = 0;
let computerWins = 0;

    //Get who is the round winner

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

    //Get the choice of the computer

    function getComputerChoice() {
        const arrayPosition = Math.floor(Math.random()*rpsArray.length)
        return rpsArray[arrayPosition]
    }        

//for (i=0; i<5; i++) {
    let computerSelection = null;
    let playerSelection = null; //prompt("please enter");
    const playerWinsSpan = document.getElementById("PlayerScore");

    document.getElementById("rock").addEventListener("click", function() {
        playerSelection = "rock"; // Assign a specific value to the common variable
        computerSelection = getComputerChoice();
        getScore = getWinner(computerSelection, playerSelection);
        console.log("Round result: " + getScore)
        if (getScore == "Player wins!") {
            playerWins = playerWins + 1;
        } else if (getScore == "Computer wins!") {
            computerWins = computerWins + 1;
        }
        console.log("Player score: " + playerWins + " vs Computer score: " + computerWins)
        playerWinsSpan.textContent = playerWins;
        if (playerWins > 4) {
            console.log("!!!Match won by player");
        } else if (computerWins > 4) {
            console.log("!!!Match won by computer");
        }
    });
    
    document.getElementById("paper").addEventListener("click", function() {
        playerSelection = "paper";
        computerSelection = getComputerChoice();
        getScore = getWinner(computerSelection, playerSelection);
        console.log("Round result: " + getScore)
        if (getScore == "Player wins!") {
            playerWins = playerWins + 1;
        } else if (getScore == "Computer wins!") {
            computerWins = computerWins + 1;
        }
        console.log("Player score: " + playerWins + " vs Computer score: " + computerWins)
        if (playerWins > 4) {
            console.log("!!!Match won by player");
        } else if (computerWins > 4) {
            console.log("!!!Match won by computer");
        }
    });
    
    document.getElementById("scissors").addEventListener("click", function() {
        playerSelection = "scissors";
        computerSelection = getComputerChoice();
        getScore = getWinner(computerSelection, playerSelection);
        console.log("Round result: " + getScore)
        if (getScore == "Player wins!") {
            playerWins = playerWins + 1;
        } else if (getScore == "Computer wins!") {
            computerWins = computerWins + 1;
        }
        console.log("Player score: " + playerWins + " vs Computer score: " + computerWins)
        if (playerWins > 4) {
            console.log("!!!Match won by player");
        } else if (computerWins > 4) {
            console.log("!!!Match won by computer");
        }
    });
//} 

//Display in html



//Get winner of the match


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

    /*// Get the choice of the computer

    function getComputerChoice() {
        const arrayPosition = Math.floor(Math.random()*rpsArray.length)
        return rpsArray[arrayPosition]
    }        

    let winnerResult = getWinner(computerSelection, playerSelection)
    console.log("Game" + (i+1) + ":" + winnerResult + " Computer selected: " + computerSelection + ", player selected: " + playerSelection)

    //Add result to the game score

    if (winnerResult === "Computer wins!") {
        computerWins += 1;
      } else if (winnerResult === "Player wins!") {
        playerWins += 1;
      }*/