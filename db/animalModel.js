import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: String,
});

const Animal = mongoose.model("Animal", animalSchema);

export async function getanimalsList() {
  const animals = await Animal.find();
  return animals;
}
export async function createAnimal(animal) {
  await Animal.create(animal);
}
