// import { createSupportsColor } from "chalk/source/vendor/supports-color/index.js";

import express, { response } from "express";

import { getCompareInputs } from "./getCompareInputs.js";

import { getComputerChoice } from "./getComputerChoice.js";

const app = express();

const PORT = 4004;

const animals = ["lion", "wolf", "cat", "mouse"];

app.use = express.json();

let playerName;

let computerName;

let playerinput;

let computerinput;

let winnerName;

let playerScore = 0;

let computerScore = 0;

// Game rules and player name input
app.get("/", (request, response) => {
  response.send(`Please find below the game steps:
  "1.Enter playername",
  "2.Enter computer name",
  "3.Enter an animal name from the list",
  "4.Computer selects an animal randomly and fights with your animal.",
  "5.The winner of the round is displayed.",
  "6.The game is finished after five rounds.",
  "7.The Winner of the game with total score is being displayed",
  `);
});

app.get("/playerName", (request, response) => {
  playerName = request.query.name;



  response.send(`Welcome ${playerName}, what is your computer name? send it to http://localhost:4004/computerName?name= 
  
  `);
});

app.get("/computerName", (request, response) => {
  computerName = request.query.name;


  response.send(`${computerName} is ready to fight!
  Choose an animal here: http://localhost:4004/playerinput?name=
  
  `);
});

app.get("/playerinput", (request, response) => {
  playerinput = request.query.name;


  response.send(`What is player's choice? send one of this animal : ${animals}, 
  
  Awesome! your choise is: ${playerinput}
  Now it's time for the computer to choose an animal here http://localhost:4004/computerchoice`);
});

app.get("/computerChoice", (request, response) => {
  computerinput = getComputerChoice(animals);
  
  response.send(
    `Computer choise is: ${computerinput}.
    Click this link to see the winner http://localhost:4004/winner`
  );
});

app.get("/winner", (request, response) => {
  
  winnerName = getCompareInputs(playerinput, computerinput);
 

  if (winnerName === "player") {
    playerScore = playerScore + 1; // playerScore++
    winnerName = playerName;

    response.send(`Winner is "${winnerName}", score is ${playerScore} `);
  } else if (winnerName === "computer") {
    computerScore = computerScore + 1; //computerScore++
    winnerName = computerName;
    response.send(`Winner is "${winnerName}", score is ${computerScore} `);
  } else {
    response.send("Tie");
  }

  // response.send(`${playerName}'s score ${playerScore}`);

  // response.send(`${computerName}'s score ${computerScore}`);

  // if (playerScore > computerScore) {
  //   response.send(`${playerName} is the winner with ${playerScore} score.`);
  // } else if (playerScore < computerScore) {
  //   response.send(`${computerName} is the winner with ${computerScore} score.`);
  // } else {
  //   response.send(
  //     `${playerName} and ${computerName} tie the Animal Fight Game with ${computerScore} score.`
  //   );
  // }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
