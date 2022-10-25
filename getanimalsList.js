let animals = [
  { name: "lion" },
  { name: "wolf" },
  { name: "cat" },
  { name: "mouse" },
  { name: "elephant" },
];
export const getanimalsList = (animals) => {
  let result = "";
  for (const animal of animals) {
    result = result + animal.name + "\n";
  }
  return result;
};
