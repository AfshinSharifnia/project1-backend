//Random animal by computer

export const getComputerChoice = (animals) => {

  const Length = animals.length;

  const randomIndex = Math.floor(Math.random() * Length);

  return animals[randomIndex].name;
};
