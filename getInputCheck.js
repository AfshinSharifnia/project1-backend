import { getRawInput } from "readline-sync";

// import { animals } from "./server.js";
let animals = [
  { name: "lion" },
  { name: "wolf" },
  { name: "cat" },
  { name: "mouse" },
  { name: "elephant" },
];

export const getInputCheck = (playerinput) => {
  let checked = false;

  for (const animal of animals) {
    if (animal.name === playerinput) {
      checked = true;
      break;
    }
  }

  return checked;
};
