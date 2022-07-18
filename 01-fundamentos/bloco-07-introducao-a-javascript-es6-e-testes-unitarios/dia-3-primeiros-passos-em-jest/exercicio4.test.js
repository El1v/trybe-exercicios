// Desafio 9
function encode(frase) {
  // seu código aqui

  let arrayFrase = frase.split('');
  for (let index = 0; index < arrayFrase.length; index += 1) {
    switch (arrayFrase[index]) {
      case 'a':
        arrayFrase[index] = 1;
        break;
      case 'e':
        arrayFrase[index] = 2;
        break;
      case 'i':
        arrayFrase[index] = 3;
        break;
      case 'o':
        arrayFrase[index] = 4;
        break;
      case 'u':
        arrayFrase[index] = 5;
        break;
    }
  }
  arrayFrase = arrayFrase.join('');
  return arrayFrase;
}

test ('Teste se encode é uma função' , () => {
  expect(typeof encode).toEqual('function');
});

test ('Testa se a vogal a é convertida para 1', () => {
  expect(encode('a')).toEqual('1');
});

test ('Testa se a vogal e é convertida para 2', () => {
  expect(encode('e')).toEqual('2');
});

test ('Testa se as vogal a,e,i,o,u é convertida para 1,2,3,4,5 em ordem', () => {
  expect(encode('aeiou')).toEqual('12345');
});

test ('Testa se a letra B é convertida para 1', () => {
  expect(encode('b')).toEqual('b');
});

test ('Testa se a quantidade de strings de entrada é a mesma que o retorno', () => {
    const frase = 'Oi, isso é um teste';
    expect(encode(frase).length).toEqual(19);
});



console.log(encode('Meu Deus não lembro disso'));

function decode(frase) {
  // seu código aqui
  let arrayFrase = frase.split('');
  for (let index = 0; index < arrayFrase.length; index += 1) {
    switch (arrayFrase[index]) {
      case '1':
        arrayFrase[index] = 'a';
        break;
      case '2':
        arrayFrase[index] = 'e';
        break;
      case '3':
        arrayFrase[index] = 'i';
        break;
      case '4':
        arrayFrase[index] = 'o';
        break;
      case '5':
        arrayFrase[index] = 'u';
        break;
    }
  }
  arrayFrase = arrayFrase.join('');
  return arrayFrase;
}

test ('Teste se decode é uma função' , () => {
  expect(typeof decode).toEqual('function');
});

test ('Testa se o numero 1  é convertida para a vogal a', () => {
  expect(decode('1')).toEqual('a');
});

test ('Testa se o numero 2 é convertida para a vogal b', () => {
  expect(decode('2')).toEqual('e');
});

test ('Testa se os numeros 1,2,3,4,5 é convertida para as vogais a,e,i,o,u em ordem', () => {
  expect(decode('12345')).toEqual('aeiou');
});

test ('Testa se o numero 6 é convertida para a', () => {
  expect(encode('6')).toEqual('6');
});

console.log(decode('M25 D25s nã4 l2mbr4 d3ss4'));
