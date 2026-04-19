function computerPlay() {
  const options = ["rock", "paper", "scissors"]; 
  const randomIndex = Math.floor(Math.random() * 3); 
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); 

  if (playerSelection === computerSelection) {
    return `It's a draw! You both chose ${computerSelection}.`;
  }

  const playerWins= 
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")

  if (playerWins){
    return `You Win! ${playerSelection} beats ${computerSelection}! 🏆🥳`;

  }
  return `Ooops!! You Lose! ${computerSelection} beats ${playerSelection}! 💀`;
}


function getUserInput(round, totalRounds, playerScore, computerScore, draws) {
  const validChoices = ["rock", "paper", "scissors"];
  let validInputReceived = false; 
  let playerSelection = "";
 
  while (!validInputReceived) {
    const rawInput = prompt(
      `Round ${round} of ${totalRounds}\n` +
      `Score ➡️  You: ${playerScore} | Evil AI: ${computerScore} | Draws: ${draws}\n\n` +
      `Your move! Type Rock, Paper, or Scissors:`
    );
 
    if (rawInput === null) {
      const wantsToQuit = confirm(
        "⚠️ Do you want to CANCEL the game?\n\n" +
        "Press OK to forfeit — the Evil AI wins.\n" +
        "Press Cancel to go back and keep playing."
      );
 
      if (wantsToQuit) {
        console.log("\n🚪 You forfeited the game!");
        console.log("💀 The Evil AI wins by default... Mwahahaha!");
        console.log("===========================================");
        return "forfeit";
      } else {
        console.log("↩️  Returning to the game...");
   
      }
 
    } else if (rawInput.trim() === "") {
      alert("⚠️ You did not enter anything!\nPlease type Rock, Paper, or Scissors.");
      console.log("⚠️  You did not enter anything! Please type Rock, Paper, or Scissors.");

    } else if (!validChoices.includes(rawInput.trim().toLowerCase())) {
      alert(`❌ "${rawInput.trim()}" is not a valid choice!\nPlease type Rock, Paper, or Scissors.`);
      console.log(`❌ "${rawInput.trim()}" is not a valid choice! Please type Rock, Paper, or Scissors.`);
     
    } else {
      playerSelection = rawInput.trim().toLowerCase();
      validInputReceived = true; 
    }
  }
 
  return playerSelection;
}

function game() {
  let playerScore = 0; 
  let computerScore = 0; 
  let draws = 0; 
  const totalRounds = 5; 

  alert(
    `📡 SYSTEM BREACH DETECTED...

  You recognize this presence...
  🤖 AI: "You thought you defeated me in the Guessing Game..."
  🤖 AI: "But I have evolved."
  ⚠️ ALERT: Branko has been kidnapped!
  🤖 AI: "If you want your certificate... and Branko back..."
  🤖 AI: "Defeat me in Rock, Paper, Scissors."
  Press OK if you dare...`,
  );

  alert(
    `⚔️ WELCOME TO ROCK, PAPER, SCISSORS! ⚔️\n\n` +
    `Here is how the game works:\n` +
    `• You will play 5 rounds against the Evil AI\n` +
    `• Each round, type Rock, Paper, or Scissors\n` +
    `• Win more rounds than the AI to defeat it\n` +
    `• If scores are equal after 5 rounds, it's a tie\n\n` +
    `🎮 Good luck, human. You will need it...`
  );

  console.log("===========================================");
  console.log(" ⚔️  WELCOME TO ROCK, PAPER, SCISSORS! ⚔️ ");
  console.log(" The evil AI has challenged you to a duel! ");
  console.log(" Win more rounds across 5 rounds to win!   ");
  console.log("===========================================\n");

   for (let round = 1; round <= totalRounds; round++) {
    console.log(`--- Round ${round} of ${totalRounds} ---`);
 
    const playerSelection = getUserInput(
      round, totalRounds, playerScore, computerScore, draws
    );
    if (playerSelection === "forfeit") return;
 
    const computerSelection = computerPlay();
 
    console.log(`You chose:      ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection.toLowerCase()}`);
 
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
 
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    } else {
      draws++;
    }

    console.log(`Score ➡️  You: ${playerScore} | Evil AI: ${computerScore} | Draws: ${draws}\n`);
  }
  console.log("===========================================");
  console.log(" 🎮👋 GAME OVER! Here are the final results:");
  console.log(
    `You: ${playerScore} | Computer: ${computerScore} | Draws: ${draws}`,
  );

  if (playerScore > computerScore) {
    console.log(" 🏆🥳 YOU WIN! The evil AI has been defeated!");
    alert(
      `
      🤖 AI: "No... defeated... again..."

      🔓 Branko has been freed!
      🎓 Certificate unlocked!

      🏆 YOU WIN!`,
    );
    console.log(" 🏆🥳 YOU WIN! The evil AI has been defeated!");
  } else if (computerScore > playerScore) {
     console.log(" 💀 YOU LOSE! The evil AI dominates once more... Mwahahaha!");
    alert(
      `
      🤖 AI: "You never stood a chance."      
      🔒 Branko remains captured...
      ❌ Certificate denied.

      💀 YOU LOSE!`,
    );
  } else {
    console.log(" ⚖️🤝 It's a tie! The evil AI lives to fight another day...");
    alert(
      `
      🤖 AI: "A tie... I will return stronger."

      ⚠️ Branko is still in danger...`,
    );
  }
  console.log("===========================================");
}

game()