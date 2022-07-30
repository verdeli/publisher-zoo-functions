const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Função Vazia;', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
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
  it('Testar Quinta-Feira;', () => {
    const actual = () => getOpeningHours('Thu', '09:00-AM');
    const expected = ('The day must be valid. Example: Monday');
    expect(actual).toThrow(expected);
  });
  it('Testar a nossa Friday;', () => {
    const actual = () => getOpeningHours('Friday', '09:00-ZM');
    const expected = ('The abbreviation must be \'AM\' or \'PM\'');
    expect(actual).toThrow(expected);
  });
  it('Testar Sabadão;', () => {
    const actual = () => getOpeningHours('Saturday', 'C9:00-A');
    const expected = ('The hour should represent a number');
    expect(actual).toThrow(expected);
  });
  it('Testar Dominguera;', () => {
    const actual = () => getOpeningHours('Sunday', '09:c0-AM');
    const expected = ('The minutes should represent a number');
    expect(actual).toThrow(expected);
  });
  it('Testar Segunda Braba;', () => {
    const actual = () => getOpeningHours('Monday', '13:00-AM');
    const expected = ('The hour must be between 0 and 12');
    expect(actual).toThrow(expected);
  });
  it('Testar terça Linda;', () => {
    const actual = () => getOpeningHours('Tuesday', '09:60-AM');
    const expected = ('The minutes must be between 0 and 59');
    expect(actual).toThrow(expected);
  });
});
