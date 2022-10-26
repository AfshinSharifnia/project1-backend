import { animals } from "./server.js";

export const getanimalsList = (animals) => {
  let result = "";
  for (const animal of animals) {
    result = result + animal.name + "\n";
  }
  return result;
};
