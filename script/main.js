

/*─────────────────────────────────────────────────────────────
The FIRST FUNCTION
The function gives us the options to choose for the game
and randomly picks any option for the computer play
─────────────────────────────────────────────────────────────*/
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"]; // We put them in an array to be able to reference them easily by index
  const randomIndex = Math.floor(Math.random() * 3); // gives us the random numbers from 0 to 3
  return options[randomIndex]; // returns which option was picked 
}

/*─────────────────────────────────────────────────────────────
THE SECOND FUNCTION
The function turns both the player and computer option into lowercase
It also checks for the winner between the player and the computer
─────────────────────────────────────────────────────────────*/

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Turns the string to lowercase e.g "ROCK" to "rock"
  computerSelection = computerSelection.toLowerCase(); // making it consistent with the player options 

  // Checks if the play is a draw 
  if (playerSelection === computerSelection) {
    return `It's a draw! You both chose ${computerSelection}.`;
  }

  // Putting together all the ways the player can win the game
  const playerWins= 
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")

  if (playerWins){
    return `You Win! ${playerSelection} beats ${computerSelection}! 🏆🥳`;

  }

  // If the play is not a draw and not a win then it's a lose
  return `Ooops!! You Lose! ${computerSelection} beats ${playerSelection}! 💀`;
}

/*─────────────────────────────────────────────────────────────
THE MAIN FUNCTION OF THE GAME
The function tracks the play and the rounds
Welcomes the user into the game by displaying the welcoming message
Loops the game for the 5 rounds it takes
Validates the player (user) input

Handling the edge cases when the player clicks cancel,Ok without 
typing anything and when they type an invalid choice.
─────────────────────────────────────────────────────────────*/

function game() {
  let playerScore = 0;    // this tracks player (user) wins
  let computerScore = 0;  // tracks computer's wins
  let draws = 0;          // tracks draws
  const totalRounds = 5;  // this is the number of rounds for the game

  console.log("===========================================");
  console.log(" ⚔️ WELCOME TO ROCK, PAPER, SCISSORS! ⚔️");
  console.log("The evil AI has challenged you to a duel!");
  console.log("Win 3 out of the 5 rounds to defeat it!");
  console.log("===========================================\n");

  for (let i = 0; i < totalRounds; i++) {   // loops exactly 5 times for the game rounds
    console.log(`--- Round ${i + 1} of ${totalRounds} ---`);

    // The loop keeps asking the player until they provide a valid answer in the options
    let playerSelection = "";
    while (true) {
      const rawInput = prompt(
        `Round ${i+1} of ${totalRounds}\n` +
        `Score ➡️  You: ${playerScore} | Evil AI: ${computerScore} | Draws: ${draws}\n\n` +
        `Your move! Type Rock, Paper, or Scissors:`
      );

      // // CASE 1: The display when the player clicks cancel  (rawInput === null)
      if (rawInput === null) {
        // Ask  the player if they really want to quit the game
        const wantsToQuit = confirm(
          "⚠️ Do you want to CANCEL the game?\n\n" +
          "Press OK to forfeit — the Evil AI wins.\n" +
          "Press Cancel to go back and keep playing."
        );

        if (wantsToQuit) {
          // When the Player confirms they want to quit, the game is forfeited
          console.log("\n🚪 You forfeited the game!");
          console.log("💀 The Evil AI wins by default... Mwahahaha!");
          console.log("===========================================");
          return; // exiting the game() function entirely
        } else {
          // Player changed their mind loop back to the prompt
          console.log("↩️  Returning to the game...");
          continue; // restarting the while loop showing the  prompt again
        }
      }

      const trimmed = rawInput.trim();

      // CASE 2: The player clicks OK without typing anything
      if (trimmed === "") {
        const emptyMsg = "⚠️ You did not enter anything!\nPlease type Rock, Paper, or Scissors.";
        alert(emptyMsg);
        console.log("⚠️  You did not enter anything! Please type Rock, Paper, or Scissors.");
        continue; // restart the while loop showing the  prompt again
      }

      const lowerInput = trimmed.toLowerCase();

      // CASE 3: The player  types something invalid 
      if (
        lowerInput !== "rock" &&
        lowerInput !== "paper" &&
        lowerInput !== "scissors"
      ) {
        alert(`❌ "${trimmed}" is not a valid choice!\nPlease type Rock, Paper, or Scissors.`);
        console.log(`❌ "${trimmed}" is not a valid choice! Please type Rock, Paper, or Scissors.`);
        continue; // restarting the while loop to show prompt again
      }

      // CASE 4: The player types a valid input
      playerSelection = trimmed;
      break;
    }

    const computerSelection = computerPlay(); // calling the first function so that the computer can make it's move
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    // playRound returns "outcome|message" — split on the pipe
    const resultRaw = playRound(playerSelection, computerSelection);
    const [outcome, resultMessage] = resultRaw.split("|");

    console.log(resultMessage);

    // ── Update scores based on outcome ──
    if (outcome === "win") {
      playerScore++;
    } else if (outcome === "lose") {
      computerScore++;
    } else {
      draws++;
    }

    // Displaying the score board to the player(user)

    console.log(`Score ➡️ You: ${playerScore} | Computer: ${computerScore} | Draws: ${draws}\n`);
  }

  // After all 5 rounds of the game, announce the overall winner
  console.log("===========================================");
  console.log(" 🎮👋 GAME OVER! Here are the final results:");
  console.log(`You: ${playerScore} | Computer: ${computerScore} | Draws: ${draws}`);

  if (playerScore > computerScore) {
    console.log(" 🏆🥳 YOU WIN! The evil AI has been defeated!");
  } else if (computerScore > playerScore) {
    console.log(" 💀 Ooops!! YOU LOSE! The evil AI dominates once more... Mwahahaha!");
  } else {
    console.log("⚖️🤝 It's a tie! The evil AI lives to fight another day...");
  }
  console.log("===========================================");
}

/* ─────────────────────────────────────────────────────────────
   START THE GAME
   The player must open the browser console (F12 → Console)
   and type  game()  then press Enter to begin.
   The game does NOT auto-run on page load, giving the player
   a chance to open the console first.
   ───────────────────────────────────────────────────────────── */
console.log("===========================================");
console.log("  ⚔️  ROCK, PAPER, SCISSORS is ready!  ⚔️  ");
console.log("  Type  game()  and press Enter to begin.  ");
console.log("===========================================");

