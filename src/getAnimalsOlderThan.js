const data = require('../data/zoo_data');

console.log(data);
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.find((element) => (element.name === animal));
  console.log(animals);
  const idade = data.residents;
  console.log(idade);
  return idade;
}
console.log(getAnimalsOlderThan());

module.exports = getAnimalsOlderThan;
