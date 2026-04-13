function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === null) {
        alert("Game cancelled!");
        return "Game cancelled!";
    }
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if(playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissors"){
    alert("Invalid input! Please choose rock, paper, or scissors.");
    return "Invalid input!";
  }
  
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  alert("Welcome to Rock, Paper, Scissors! You will play 5 rounds against the computer. May the best player win!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice (rock, paper, scissors):",
    );
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    
    if (result.includes("You win!")) playerScore++;
    else if(result.includes("Invalid input!") || result.includes("Game cancelled!"))
        break
    else if(result.includes("It's a tie!"))
        continue
    else computerScore++;
  }
  alert(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
}

game();
