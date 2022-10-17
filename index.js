import chalk from "chalk";

import rl from "readline-sync";

const animals = ["lion", "wolf", "cat", "mouse"];

const getComputerChoice = (animals) => {
  const Lenght = animals.length;

  const randomIndex = Math.floor(Math.random() * Lenght);

  return animals[randomIndex];
};

function getCompareInputs(playerinput, computerinput) {
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

let playerScore = 0;
let computerScore = 0;

console.log(chalk.cyanBright("Welcome to Animal Fight Game!"));

const playerName = rl.question("What is Player's name? ");

console.log(chalk.bgYellow(`Hello ${playerName}`));

const computerName = rl.question("What is computer's name? ");

console.log(chalk.bgYellow(`Hello ${computerName}`));

while (true) {
  console.log(
    chalk.yellow(`${playerName}, which animal do you choose: ${animals}`)
  );

  const playerinput = rl.question(`${playerName} choice is: `);

  console.log(`${computerName} random choice is: `);

  const computerinput = getComputerChoice(animals);

  console.log(computerinput);

  const winner = getCompareInputs(playerinput, computerinput);

  let winnerName = "";

  if (winner === playerName) {
    playerScore = playerScore + 1; // playerScore++
    winnerName = playerName;
    console.log(`Winner is "${winnerName}" `);
  } else if (winner === computerName) {
    computerScore = computerScore + 1; //computerScore++
    winnerName = computerName;
    console.log(`Winner is "${winnerName}" `);
  } else {
    console.log("Tie");
  }

  console.log(`${playerName}'s score ${playerScore}`);
  console.log(`${computerName}'s score ${computerScore}`);

  //continue : Returns to the start of the While loop
  if (playerScore >= 2 || computerScore >= 2) {
    break;
  }
}

if (playerScore > computerScore) {
  console.log(
    chalk.bold.cyan(
      `${playerName} is the winner of "Animal Fight Game" with ${playerScore} score.`
    )
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
