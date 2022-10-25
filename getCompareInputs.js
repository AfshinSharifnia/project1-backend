export function getCompareInputs(playerinput, computerinput) {
  if (playerinput === "elephant") {
    if (
      computerinput === "lion" ||
      computerinput === "wolf" ||
      computerinput === "cat"
    ) {
      return "player";
    } else if (computerinput === "mouse") {
      return "computer";
    } else {
      return "Tie";
    }
  } else if (playerinput === "lion") {
    if (
      computerinput === "wolf" ||
      computerinput === "cat" ||
      computerinput === "mouse"
    ) {
      return "player";
    } else if (computerinput === "elephant") {
      return "computer";
    } else {
      return "Tie";
    }
  } else if (playerinput === "wolf") {
    if (computerinput === "cat" || computerinput === "mouse") {
      return "player";
    } else if (computerinput === "lion" || computerinput === "elephant") {
      return "computer";
    } else {
      return "Tie";
    }
  } else if (playerinput === "cat") {
    if (
      computerinput === "wolf" ||
      computerinput === "lion" ||
      computerinput === "elephant"
    ) {
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
    } else if (computerinput === "elephant") {
      return "player";
    } else {
      return "Tie";
    }
  }
}
