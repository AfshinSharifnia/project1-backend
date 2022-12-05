// import { createSupportsColor } from "chalk/source/vendor/supports-color/index.js";

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log(process.env.MONGODB_DBNAME);
  //connect to db in cloud
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.Cohort9,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  });
  console.log(`MongoDB is connected to ${process.env.MONGODB_DBNAME}`);

  // create person schema
  const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
  });

  //create Model based on the Person schema
  const Person = mongoose.model("Person", personSchema);
  const afshin = new Person({
    firstName: "Afshin",
    lastName: "Sharifnia",
    age: 55,
  });
  await afshin.save();
  //Saved afshin

  await Person.findByIdAndUpdate("638cfc1810dadd673096f783", { age: 45, firstName:"Azadeh", lastName:"H" });
}
main().catch((err) => console.error(err));

import { getanimalsList } from "./getanimalsList.js";

import { getCompareInputs } from "./getCompareInputs.js";

import { getComputerChoice } from "./getComputerChoice.js";

import { getInputCheck } from "./getInputCheck.js";

const app = express();
const PORT = 4004;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
app.use = express.json();

let playerName;

let computerName = "Computer";

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
  } else {
    response.send(
      `"${playerinput}" is a wrong choice, please choose from the animal list!`
    );
  }
});

app.get("/computerChoice", (request, response) => {
  computerinput = getComputerChoice(animals);

  response.send(
    `Computer choice is "${computerinput}"

    Click  http://localhost:4004/winner to see the winner!`
  );
});

app.get("/winner", (request, response) => {
  winnerName = getCompareInputs(playerinput, computerinput);

  if (winnerName === "player") {
    playerScore = playerScore + 1; // playerScore++
    winnerName = playerName;

    response.send(
      `The winner is "${winnerName}", Total score is = ${playerScore} `
    );
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
