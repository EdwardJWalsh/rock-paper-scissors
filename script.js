const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
button.addEventListener('click',() =>{
    const result=
    playGame (button.id, computerPlay());
    resultElement.textContent = result;

});
});

let playerScore = 0;
let computerScore = 0;

const resultElement = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && 
        computerSelection === "scissors") ||
        (playerSelection === "paper" && 
        computerSelection === "rock") ||
        (playerSelection === "scissors" && 
        computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;}
      else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }


}