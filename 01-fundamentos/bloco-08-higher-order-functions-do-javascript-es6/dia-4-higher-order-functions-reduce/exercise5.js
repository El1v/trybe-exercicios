const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha', 'Teste',
];

//🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA(array) {
  return array.map ((element ) => element.split('')
  .reduce((acc ,curr) => (curr === 'A' || curr === 'a') ? acc += 1 : acc += 0, 0))
  .reduce((acc, curr) => acc + curr);
}

// console.log(containsA(names));

function containsA2(array) {
  return array.reduce((acc, curr) => 
  acc + curr.split('').reduce((acc2, curr2) => {
    if(curr2 === 'A' || curr2 === 'a') return acc2 + 1;
    return acc2;
  }, 0), 0)
}

console.log(containsA2(names));