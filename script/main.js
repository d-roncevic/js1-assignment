/*
The FIRST FUNCTION
The function gives us the options to choose for the game
and randomly picks any option for the computer play
*/
function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"]; // We put them in an array to be able to reference them easily by index
  const randomIndex = Math.floor(Math.random() * 3); // gives us the random numbers from 0 to 3
  return options[randomIndex]; // returns which option was picked 
}

/*
THE SECOND FUNCTION
The function turns both the player and computer option into lowercase
It also checks for the winner between the player and the computer
*/

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Turns the string to lowercase e.g "ROCK" to "rock"
  computerSelection = computerSelection.toLowerCase(); // making it consistent with the player options 

  // Checks if the play is a draw 
  if (playerSelection === computerSelection) {
    return `It's a draw! You both chose ${computerSelection}.`;
  }

  // Putting together all the ways the player can win the game
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}! 🏆🥳`;
  }

  // If the play is not a draw and not a win then it's a lose
  return `Ooops!! You Lose! ${computerSelection} beats ${playerSelection}! 💀`;
}

/*
THE MAIN FUNCTION OF THE GAME
The function tracks the play and the rounds
Welcomes the user into the game by displaying the welcoming message
Loops the game for the 5 rounds it takes
Validates the player (user) input
*/

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
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt("Your move! Type Rock, Paper, or Scissors:").toLowerCase();

      // checks the validity of the player input

      if (    
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors"
      ) {
        console.log("❌ Invalid choice! Please type Rock, Paper, or Scissors.");
      }
    }

    const computerSelection = computerPlay(); // calling the first function so that the computer can make it's move
    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection); // calling the second function to check for the winner of this round
    console.log(result); // displaying the result to the user from the second function

    // Updating the score based on who won on the round
    if (result.includes("You Win")) {
      playerScore++;
    } else if (result.includes("You Lose")) {
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

// Starting the game by calling the function game
game();

