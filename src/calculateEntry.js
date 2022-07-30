const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const senior = entrants.filter((entrantsSenior) => entrantsSenior.age >= 50);
  const adult = entrants.filter((entrantsAdult) => entrantsAdult
    .age >= 18 && entrantsAdult.age < 50);
  const child = entrants.filter((entrantsChild) => entrantsChild.age < 18);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    // console.log(Object.keys(entrants.length));
    return 0;
  }
  const total = countEntrants(entrants);
  console.log(total);
  const priceSenior = prices.senior * total.senior;
  const priceAdult = prices.adult * total.adult;
  const priceChild = prices.child * total.child;
  return priceAdult + priceChild + priceSenior;
}
// console.log(calculateEntry({ child: 3, adult: 2, senior: 1 }));
// console.log(countEntrants([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));
module.exports = { calculateEntry, countEntrants };
