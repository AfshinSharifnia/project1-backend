// import { createSupportsColor } from "chalk/source/vendor/supports-color/index.js";

import express, { response } from "express";

import { getanimalsList } from "./getanimalsList.js";

import { getCompareInputs } from "./getCompareInputs.js";

import { getComputerChoice } from "./getComputerChoice.js";

import { getInputCheck } from "./getInputCheck.js";

const app = express();

const PORT = 4004;

app.use = express.json();

let playerName;

let computerName="Computer"

let playerinput;

let computerinput;

let winnerName;

let playerScore = 0;

let computerScore = 0;

let animalList;

export let animals = [
  { name: "lion" },
  { name: "wolf" },
  { name: "cat" },
  { name: "mouse" },
  { name: "elephant" },
];

// Game rules and player name input
app.get("/", (request, response) => {

  response.send(`𝐆𝐚𝐦𝐞 𝐬𝐭𝐞𝐩𝐬 :
  1.Enter player name
  2.Choose an animal from the list
  3.Computer will choose an animal randomly.
  4.The winner animal with score is being displayed.

Problem to solve :"Which animals are afraid of mice? Let's play and find out!"

  Click http://localhost:4004/playerName?name= to start the game
  `);
});

app.get("/playerName", (request, response) => {

  playerName = request.query.name;

  response.send(`Hello ${playerName}, 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡e "𝐀𝐧𝐢𝐦𝐚𝐥𝐬 𝐅𝐢𝐠𝐡𝐭 𝐆𝐚𝐦𝐞"

  click http://localhost:4004/animalsList to see the animals list
   
  
  `);
});

// app.get("/computer", (request, response) => {
//   computerName = "Computer";

//   response.send(`"Computer" is about to fight.
//   Please see the animals list here => http://localhost:4004/animalsList
  
  
//   `);
// });

app.get("/animalsList", (request, response) => {

  animalList = getanimalsList(animals);

  response.send(`click http://localhost:4004/playerChoice?name= and choose one of the below animals:

   ${animalList}`);
});

app.get("/playerChoice", (request, response) => {


  playerinput = request.query.name;

  let playerChoice = getInputCheck(playerinput.toLowerCase());

  if (playerChoice == true) {
    response.send(`Player choice is "${playerinput}" 

    Click http://localhost:4004/computerChoice to see the computer choice.
    `);
  } 
  else {
    response.send(
      `"${playerinput}" is a wrong choice, please choose from the animal list!`
    );
  }
});

app.get("/computerChoice", (request, response) => {
  
  computerinput = getComputerChoice(animals);

  response.send(
    `Computer choice is "${computerinput}"

    Click  http://localhost:4004/winner to see the winner!`);
});

app.get("/winner", (request, response) => {
  winnerName = getCompareInputs(playerinput, computerinput);

  if (winnerName === "player") {
    playerScore = playerScore + 1; // playerScore++
    winnerName = playerName;

    response.send(`The winner is "${winnerName}", Total score is = ${playerScore} `);
  } else if (winnerName === "computer") {
    computerScore = computerScore + 1; //computerScore++
    winnerName = computerName;
    response.send(
      `The winner is "${winnerName}", Total score is = ${computerScore} `
    );
  } else {
    response.send("The game is tied");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
