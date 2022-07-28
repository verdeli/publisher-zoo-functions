const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui Verdeli!
  if (ids.length === 0) {
    return [];
  }
  // console.log(ids);
  // console.log(species);
  return ids.map((id) => species.find((animal) => id === animal.id));
}
// console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274','0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
