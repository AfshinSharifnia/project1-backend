// import { createSupportsColor } from "chalk/source/vendor/supports-color/index.js";

import express, { response } from "express";

import { getanimalsList } from "./getanimalsList.js";

import { getCompareInputs } from "./getCompareInputs.js";

import { getComputerChoice } from "./getComputerChoice.js";

const app = express();

const PORT = 4004;

app.use = express.json();

let playerName;

let computerName;

let playerinput;

let computerinput;

let winnerName;

let playerScore = 0;

let computerScore = 0;

let animalList;

let animals = [
  { name: "lion" },
  { name: "wolf" },
  { name: "cat" },
  { name: "mouse" },
  { name: "elephant" },
];

// Game rules and player name input
app.get("/", (request, response) => {
  response.send(`Please find below the game steps:

  "1.Enter playername",
  "2.Enter an animal name from the list",
  "3.Computer selects an animal randomly and fights with your animal.",
  "4.The winner of the round is displayed.",
  "5.The game is finished after five rounds.",
  "6.The Winner of the game with total score is being displayed",
  "7.Do you think elephants are afraid of mice? Give it a try!"
  `);
});

app.get("/playerName", (request, response) => {
  playerName = request.query.name;

  response.send(`Hello ${playerName},Welcome to the "Animals fight game"

   Next step ==>  http://localhost:4004/computer
  
  `);
});

app.get("/computer", (request, response) => {
  computerName = "Computer";

  response.send(`"Computer" is about to fight.
  Please see the animals list here => http://localhost:4004/animalsList
  
  
  `);
});

app.get("/animalsList", (request, response) => {
  animalList = getanimalsList(animals);

  response.send(`To choose an animal, go to ==> http://localhost:4004/playerChoice

   ${animalList}`);push
});

app.get("/playerChoice", (request, response) => {
  animalList = getanimalsList(animals);

  playerinput = request.query.name;

  response.send(`Which animal would be your choice? 
    ${animalList}
  Thanks! you chose "${playerinput}"

  Go to the next step and see what would be the computer choice==> http://localhost:4004/computerchoice`);
});

app.get("/computerChoice", (request, response) => {
  computerinput = getComputerChoice(animals);

  response.send(
    `Computer choice is "${computerinput}"

    The winner is http://localhost:4004/winner`
  );
});

app.get("/winner", (request, response) => {
  winnerName = getCompareInputs(playerinput, computerinput);

  if (winnerName === "player") {
    playerScore = playerScore + 1; // playerScore++
    winnerName = playerName;

    response.send(`The winner is "${winnerName}", score is = ${playerScore} `);
  } else if (winnerName === "computer") {
    computerScore = computerScore + 1; //computerScore++
    winnerName = computerName;
    response.send(
      `The winner is "${winnerName}", score is = ${computerScore} `
    );
  } else {
    response.send("The game is tied");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
