// import { "player", "computer" } from "./server.js";

// comparing inputs function

export function getCompareInputs(playerinput, computerinput) {
  if (playerinput === "lion") {
    if (
      computerinput === "wolf" ||
      computerinput === "cat" ||
      computerinput === "mouse"
    ) {
      return "player";
    } else {
      return "Tie";
    }
  } else if (playerinput === "wolf") {
    if (computerinput === "cat" || computerinput === "mouse") {
      return "player";
    } else if (computerinput === "lion") {
      return "computer";
    } else {
      return "Tie";
    }
  } else if (playerinput === "cat") {
    if (computerinput === "wolf" || computerinput === "lion") {
      return "computer";
    } else if (computerinput === "mouse") {
      return "player";
    } else {
      return "Tie";
    }
  } else {
    if (
      computerinput === "wolf" ||
      computerinput === "cat" ||
      computerinput === "lion"
    ) {
      return "computer";
    } else {
      return "Tie";
    }
  }
}
