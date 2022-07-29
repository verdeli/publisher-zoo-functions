const data = require('../data/zoo_data');

const animais = data.species;
// console.log(data);
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = animais.find((element) => (element.name === animal));
  // console.log(animals);
  const idade = animals.residents;
  // console.log(idade);
  const verificaIdade = idade.every((idades) => idades.age >= age);
  // console.log(age);
  return verificaIdade;
}
console.log(getAnimalsOlderThan('tigers', 50));

module.exports = getAnimalsOlderThan;
