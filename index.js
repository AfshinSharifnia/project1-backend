import chalk from "chalk";

import rl from "readline-sync";

const animals = ["lion", "wolf", "cat", "mouse"];

const getComputerChoice = (randomAnimals) => {
  const Lenght = randomAnimals.length;

  const randomIndex = Math.floor(Math.random() * Lenght);

  return randomAnimals[randomIndex];
};

function compare(playerinput, computerinput) {
  if (playerinput === "lion") {
    if (
      computerinput === "wolf" ||
      computerinput === "cat" ||
      computerinput === "mouse"
    ) {
      return playerName;
    } else {
      return "Tie";
    }
  } else if (playerinput === "wolf") {
    if (computerinput === "cat" || computerinput === "mouse") {
      return playerName;
    } else if (computerinput === "lion") {
      return computerName;
    } else {
      return "Tie";
    }
  } else if (playerinput === "cat") {
    if (computerinput === "wolf" || computerinput === "lion") {
      return computerName;
    } else if (computerinput === "mouse") {
      return playerName;
    } else {
      return "Tie";
    }
  } else {
    if (
      computerinput === "wolf" ||
      computerinput === "cat" ||
      computerinput === "lion"
    ) {
      return computerName;
    } else {
      return "Tie";
    }
  }
}

console.log(chalk.cyanBright("Welcome to Animal Fight Game!"));

const playerName = rl.question("What is Player's name? ");

console.log(chalk.bgCyan(`Hello ${playerName}`));

const computerName = rl.question("What is computer's name? ");

console.log(chalk.bgCyan(`Hello ${computerName}`));

let playerScore = 0;

let computerScore = 0;

while (true) {
  console.log(chalk.yellow(`Choose an animal : ${animals}`));

  const playerinput = rl.question(`What is ${playerName} choice? `);

  console.log(`What is ${computerName} choice? `);

  let computerinput = getComputerChoice(animals);

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
    console.log("Tie");
  }

  console.log(`${playerName}'s score ${playerScore}`);
  console.log(`${computerName}'s score ${computerScore}`);

  //continue : Returns to the start of the While loop
  if (playerScore >= 4 || computerScore >= 4) {
    break;
  }
}

if (playerScore > computerScore) {
  console.log(
    `${playerName} is the winner of Animal Fight Game with ${playerScore} score.`
  );
} else if (playerScore < computerScore) {
  console.log(
    chalk.bgGreenBright(
      `${computerName} is the winner of Animal Fight Game with ${computerScore} score.`
    )
  );
} else {
  console.log(
    `${playerName} and ${computerName} tie the Animal Fight Game with ${computerScore} score.`
  );
}
