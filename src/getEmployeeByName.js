const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const empregados = data.employees;
  // console.log(empregados);
  return empregados.find((x) => x.firstName === employeeName || x.lastName === employeeName);
}

console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
