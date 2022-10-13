import chalk from "chalk";

import rl from "readline-sync";

const randomAnimals = ["lion", "wolf", "cat"];

const getComputerChoice = (randomAnimals) => {
  const Lenght = randomAnimals.length;

  const randomIndex = Math.floor(Math.random() * Lenght);

  return randomAnimals[randomIndex];
};

function compare(playerinput, computerinput) {
  if (playerinput === "wolf") {
    if (computerinput === "wolf") {
      return "draw";
    } else if (computerinput === "lion") {
      return computerName;
    } else {
      return playerName;
    }
  } else if (playerinput === "lion") {
    if (computerinput === "wolf") {
      return playerName;
    } else if (computerinput === "lion") {
      return "draw";
    } else {
      return playerName;
    }
  } else {
    if (computerinput === "wolf") {
      return computerName;
    } else if (computerinput === "lion") {
      return computerName;
    } else {
      return "draw";
    }
  }
}

console.log(chalk.bgBlue.greenBright("Welcome to Animal Fight Game!"));
console.log("\n");

const playerName = rl.question("What is Player's name? ");

console.log(`Hello ${playerName}!`);

const computerName = rl.question("What is computer's name? ");

console.log(`Hello ${computerName}!`);

let playerScore = 0;

let computerScore = 0;

while (true) {
  const playerinput = rl.question("What is player's choice? ");

  // const computerChoice = rl.question("What is computer's input? ");

  console.log("What is computer choice?");

  let computerinput = getComputerChoice(randomAnimals);

  console.log(computerinput);

  const winner = compare(playerinput, computerinput);

  let winnerName;

  if (winner === playerName) {
    playerScore = playerScore + 1; // playerScore++
    winnerName = playerName;
  } else if (winner === computerName) {
    computerScore = computerScore + 1; //computerScore++
    winnerName = computerName;
  } else {
    console.log("Draw, please play again!");
  }

  console.log(`${playerName}'s score ${playerScore}`);
  console.log(`${computerName}'s score ${computerScore}`);

  //continue; //Returns to the start of the While loop
  if (playerScore >= 3 || computerScore >= 3) {
    break;
  }
}

if (playerScore > computerScore) {
  console.log(
    `${playerName} is the winner of Animal Fight Game with ${playerScore} score.`
  );
} else if (playerScore < computerScore) {
  console.log(
    `${computerName} is the winner of Animal Fight Game with ${computerScore} score.`
  );
} else {
  console.log(
    `${playerName} and ${computerName} tie the Animal Fight Game with ${computerScore} score.`
  );
}
