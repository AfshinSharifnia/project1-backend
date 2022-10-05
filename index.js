import rl from "readline-sync";

function compare(player1input, player2input) {
  if (player1input === "rock") {
    if (player2input === "rock") {
      return "draw";
    } else if (player2input === "paper") {
      return player2Name;
    } else {
      return player1Name;
    }
  } else if (player1input === "paper") {
    if (player2input === "rock") {
      return player1Name;
    } else if (player2input === "paper") {
      return "draw";
    } else {
      return player2Name;
    }
  } else {
    if (player2input === "rock") {
      return player2Name;
    } else if (player2input === "paper") {
      return player1Name;
    } else {
      return "draw";
    }
  }
}

console.log("Welcome to Rock,Paper,Scissors!");

const player1Name = rl.question("What is Player 1's name? ");

console.log(`Hello ${player1Name}!`);

const player2Name = rl.question("What is Player 2's name? ");

console.log(`Hello ${player2Name}!`);

let player1Score = 0;
let player2Score = 0;

while (true) {
  const player1input = rl.question("What is player 1's input? ");
  const player2input = rl.question("What is player 2's input? ");

  const winner = compare(player1input, player2input);

  let winnerName;

  if (winner === player1Name) {
    player1Score = player1Score + 1; // player1Score++
    winnerName = player1Name;
  } else if (winner === player2Name) {
    player2Score = player2Score + 1; //player2Score++
    winnerName = player2Name;
  } else {
    console.log("Draw, please play again!");
    continue; //Returns to the tart of the While loop
    // break; ( Exits the loop)
  }

  console.log(`The winner is ${winnerName}`);
  console.log(`Player 1's score ${player1Score}`);
  console.log(`Player 2's score ${player2Score}`);
}
