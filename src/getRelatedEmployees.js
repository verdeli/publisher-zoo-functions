const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const employ = data.employees;

function isManager(id) {
  // seu código aqui
  const managers = employees.map((employe) => employe.managers);
  console.log(managers);
  const verify = managers.filter((elemento) => elemento.includes(id));
  // return verify;
  const TF = verify.some((elemento) => elemento.includes(id));
  return TF;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
function getRelatedEmployees(managerId) {
  // seu código aqui
  const gerente = [];
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  employ.forEach((elemento) => {
    if (elemento.managers.includes(managerId)) {
      gerente.push(`${elemento.firstName} ${elemento.lastName}`);
    }
  });
  return gerente;
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
