let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1

/*for (let index = 0 ; index < numbers.length ; index += 1){
  console.log(numbers[index]);
}*/

//exercicio 2

/*let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}
console.log("A soma total é : " , soma);*/

//exercicio 3

// let soma = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   soma = soma + numbers[index];
//   media = soma / (index +1);
// }
// console.log("Tamanho do array : " , numbers.length);
// console.log("A soma total é : " , soma);
// console.log("A media é : " , media);

//exercicio 4

// let soma = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1){
//   soma = soma + numbers[index];
//   media = soma / (index +1);
// }

// if(media > 20){
//   console.log("Valor maior que 20");
// }else{
//   console.log("Valor menor ou igual a 20");
// }

// console.log("Tamanho do array : " , numbers.length);
// console.log("A soma total é : " , soma);
// console.log("A media é : " , media);

//exercicio 5 rocket

let maiorNumero = numbers[0];

for(let index = 0; index < numbers.length; index += 1){

  if(numbers[index] > maiorNumero){
    maiorNumero = numbers[index];
  }
}
console.log ("Maior numero : " , maiorNumero);

//exercicio 6

// let contadorImpar = 0;

// for(let index = 0; index < numbers.length; index += 1){

//   if(numbers[index] % 2 === 1){
//     // console.log("Esse numero é impar : " , numbers[index]);
//     contadorImpar += 1;
//   }else{
//     // console.log("Esse numero é par : " , numbers[index]);
//   }
// }

// console.log(contadorImpar);

//exercicio 7

// let menorNumero = numbers[0];

// for(index = 1; index < numbers.length; index += 1){

//   if(menorNumero > numbers[index]){
//     menorNumero = numbers[index];
//   }
// }

// console.log ("Menor numero : " , menorNumero);

//exercicio 8 e 9

let arrayNumbers = [];
let resultado = 0;

for (let index = 1; index <= 25; index += 1) {
  arrayNumbers.push(index);
}

for(index = 0; index < arrayNumbers.length; index += 1){
  console.log(arrayNumbers[index] / 2);
}

