//Random animal function
export const getComputerChoice = (animals) => {
  const Lenght = animals.length;

  const randomIndex = Math.floor(Math.random() * Lenght);

  return animals[randomIndex];
};
