import express, { request, response } from "express";
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

let playerScore = 0;

let computerScore = 0;

let gameRules = [
  "1.Enter playername",
  "2.Enter computer name",
  "3.Enter an animal name from the list",
  "4.Computer selects an animal randomly and fights with your animal.",
  "5.The winner of the round is displayed.",
  "6.The game is finished after five rounds.",
  "7.The Winner of the game with total score is being displayed",
];

// Game rules and player name input
app.get("/", (request, response) => {
  const playerName = request.query.name;

  response.send(`Please find below the game steps:
  ${gameRules};
  `);
});

// Player name display / compter name input
app.get("/playerName", (request, response) => {
  let playerName = request.query.name;

  response.send(`Welcome ${playerName}, what is your computer name? send it to http://localhost:4004/computerName?name= 
  
  `);
});

app.get("/computerName", (request, response) => {
  const computerName = request.query.name;

  response.send(`${computerName} is ready to fight!
  Now it's time for the player to choose an animal here: http://localhost:4004/playerinput?name=
  
  `);
});

app.get("/playerinput", (request, response) => {
  const playerinput = request.query.name;

  response.send(`What is player's choice? send one of this animal : ${animals}, 
  
  Awesome! your choise is: ${playerinput}
  Now it's time for the computer to choose an animal here http://localhost:4004/computerchoice`);
});

app.get("/computerChoice", (request, response) => {
  
  const computerinput = getComputerChoice(animals);

  response.send(`Computer choise is: ${computerinput}`);
});

app.get("/compareInputs", (request, response) => {

  const compareResult = getCompareInputs(playerinput, computerinput);

  response.send(`Computer choise is: ${compareResult}`);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
