const data = require('../data/zoo_data');

const { species, hours } = data;
// console.log(species, hours);

const dias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const nomeAnimais = species.map((nome) => nome.name);
console.log(nomeAnimais);
const diasFuncionamento = (dia) => {
  const animals = species.filter((animal) =>
    animal.availability.some((diasFunc) => diasFunc === dia));
  const hora = `Open from ${hours[dia].open}am until ${hours[dia].close}pm`;
  if (dia === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: hora,
    exhibition: animals.map((animal) => animal.name),
  };
};

const funcionamento = {
  Tuesday: diasFuncionamento('Tuesday'),
  Wednesday: diasFuncionamento('Wednesday'),
  Thursday: diasFuncionamento('Thursday'),
  Friday: diasFuncionamento('Friday'),
  Saturday: diasFuncionamento('Saturday'),
  Sunday: diasFuncionamento('Sunday'),
  Monday: diasFuncionamento('Monday'),
};
function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) return funcionamento;
  if (!nomeAnimais.find((animais) => animais === scheduleTarget) && !dias
    .find((valor) => valor === scheduleTarget)) return funcionamento;
  if (nomeAnimais.find((bicho) => bicho === scheduleTarget)) {
    const especies = species.find((element) => element.name === scheduleTarget).availability;
    return especies;
  }
  return { [scheduleTarget]: diasFuncionamento(scheduleTarget) };
}

module.exports = getSchedule;
