const data = require('../data/zoo_data');

const { species } = data;

const procuraResident = (animal) => species
  .find((specie) => specie.name === (animal.specie)).residents;
// console.log(procuraResident);

const filtraGenero = (animal) => procuraResident(animal)
  .filter((resident) => resident.sex === (animal.sex));

const eAnimal = () =>
  species.reduce((acc, especies) => Object.assign(acc, {
    [especies.name]: especies.residents.length,
  }), {});

function countAnimals(animal) {
  // seu código aqui
  // return species;
  if (!animal) {
    return eAnimal();
  }
  // return procuraResident;
  // return filtraGenero;
  return animal.sex ? filtraGenero(animal).length : procuraResident(animal).length;
}
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
