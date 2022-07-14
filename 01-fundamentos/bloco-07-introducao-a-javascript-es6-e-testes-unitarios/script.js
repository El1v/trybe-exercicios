//exercicio 1
// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = ifScope + ` ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// testingScope(true);

//exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => {
  if(a > b) return 1;
  if(a < b) return -1;
  return 0;  
  }
)

console.log(`Os numeros ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉