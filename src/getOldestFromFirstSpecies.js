const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalFinder = employees.find((animal) => animal.id === id).responsibleFor[0];
  // return animalFinder;
  const verify = species.find((bicho) => bicho.id === animalFinder);
  const { residents } = verify;
  const residentes = residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(residentes);
}
module.exports = getOldestFromFirstSpecies;
