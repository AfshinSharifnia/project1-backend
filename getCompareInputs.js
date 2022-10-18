import { playerName, computerName } from "./index.js";

// comparing inputs function
export function getCompareInputs(playerinput, computerinput) {
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
