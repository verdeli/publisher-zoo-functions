const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se usuário escreve algo;', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toEqual(expected);
  });
  it('Verificar é undefined;', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('A entrada de dados utiliza de somente strings', () => {
    const actual = handlerElephants(42);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('Quando passado o argumento location, me retorna a localização Nordeste;', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('Retorna a média de Elefantes.', () => {
    const actual = handlerElephants('averageAge');
    const expected = (10.5);
    expect(actual).toEqual(expected);
  });
  it('Ao passar o argumento count, revela a quantidade de elefantes.', () => {
    const actual = handlerElephants('count');
    const expected = (4);
    expect(actual).toEqual(expected);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes.', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
