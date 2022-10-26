
import { animals } from "./server.js";


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
