const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
}); 

test ('o resultado da soma de 4 com 5 é 9', () =>{
  expect(sum(4,5)).toEqual(9);
} )

test ('o resultado da soma de 0 com 0 é 0', () =>{
  expect(sum(0,0)).toEqual(0);
} )

test ('testa se a função sum lança um erro quando os parametros são 4 e "string 5"', () =>{
  expect(() => sum(4, '5').toThrow(Error));
} )

test ('testa se a função sum lança uma mensagem de erro (parameters must be numbers) quando os parametros são 4 e "string 5"', () =>{
  expect(() => sum(4, '5').toThrow('parameters must be numbers'));
} )
