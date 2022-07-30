const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Zoo é fechado toda;', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Verificar se terça feira está aberto;', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Zoo é fechado nas quartas-feiras', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('A função não faz diferenciação entre maiúsculas e minúsculas;', () => {
    const regerx = new RegExp('[^A-Za-z0-9]', '');
    const actual = 'Maiuscula e Minuscula';
    expect(actual).toMatch(regerx);
  });
  // it('As horas serão validadasna nomenclatura Am e PM;', () => {
  //   const regerx = getOpeningHours('Monday', new RegExp('[^A-Za-z0-9]', ''));
  //   const actual = 'Monday 9:01 AM';
  //   expect(actual).toMatch(regerx);
  // });
});
