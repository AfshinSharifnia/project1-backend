// import chalk from "chalk";

// import rl from "readline-sync";

// import { getCompareInputs } from "./getCompareInputs.js";

// import { getComputerChoice } from "./getComputerChoice.js";

// console.log(chalk.cyanBright("Welcome to Animal Fight Game!"));

// export const playerName = rl.question(`What is Player's name?`);

// console.log(chalk.yellow(`Hello ${playerName}`));

// export const computerName = rl.question("What is computer's name? ");

// console.log(chalk.yellow(`Hello ${computerName}`));

// const animals = ["lion", "wolf", "cat", "mouse"];

// Winner function

// let playerScore = 0;

// let computerScore = 0;

// while (true) {

  // console.log(

  //   chalk.yellow(`${playerName}, please choose an animal: ${animals}`)
  // );

  // const playerinput = rl.question(`${playerName} choice is: `);

  // console.log(`${computerName} choice is: `);

  // const computerinput = getComputerChoice(animals);

  // console.log(computerinput);

  // const winner = getCompareInputs(playerinput, computerinput);

  // let winnerName;
// while (true) {
//   if (winner === playerName) {
//     playerScore = playerScore + 1; // playerScore++
//     winnerName = playerName;
//     console.log(`Winner is "${winnerName}" `);
//   } else if (winner === computerName) {
//     computerScore = computerScore + 1; //computerScore++
//     winnerName = computerName;
//     console.log(`Winner is "${winnerName}" `);
//   } else {
//     console.log("Tie");
//   }

//   console.log(`${playerName}'s score ${playerScore}`);
//   console.log(`${computerName}'s score ${computerScore}`);

//   if (playerScore >= 2 || computerScore >= 2) {
//     break;
//   }
// }

// if (playerScore > computerScore) {
//   console.log(
//     chalk.yellow(`${playerName} is the winner with ${playerScore} score.`)
//   );
// } else if (playerScore < computerScore) {
//   console.log(
//     chalk.yellow(`${computerName} is the winner with ${computerScore} score.`)
//   );
// } else {
//   console.log(
//     `${playerName} and ${computerName} tie the Animal Fight Game with ${computerScore} score.`
//   );
// }

// To be added later
// const winners = [];

// winners.push(
//   { name: playerName, computerName },
//   { score: playerScore, computerScore }
// );
// console.log(winners);
