// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

let soma = 0;

// for (let index = 0; index <= 50; index += 1){
//     soma += index;
    
// }
// console.log("A soma total de 1 a 50 é: " , soma);

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let contador = 0;

// for (let index = 2; index <= 150; index += 1){

//     if(index % 3 === 0){
//         contador += 1;
//     }
// }
// if(contador === 50){
//     console.log("Mensagem secreta");
// }

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let tesoura = "tesoura";
// let papel = "papel";
// let pedra = "pedra";

// let pessoa1 = "pedra";
// let pessoa2 = "pedra";

//     if(pessoa1 === "papel" && pessoa2 === "tesoura"){
//         console.log("Pessoa 2 ganhou");
//     }else if(pessoa1 === "papel" && pessoa2 === "pedra"){
//         console.log("Pessoa 1 ganhou");
//     }else if (pessoa1 === "tesoura" && pessoa2 === "pedra"){
//         console.log("Pessoa 2 ganhou");
//     }else if (pessoa1 === "tesoura" && pessoa2 === "papel"){
//         console.log("Pessoa 1 ganhou");
//     }else if (pessoa1 === "pedra" && pessoa2 === "tesoura"){
//         console.log("Pessoa 1 ganhou");
//     }else if (pessoa1 === "pedra" && pessoa2 ==="papel"){
//         console.log("Pessoa 2 ganhou");
//     }else{
//         console.log("Empate");
//     }

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idade = 18;

// if(idade >= 18){
//     console.log("Pessoa é maior de idade");
// }else{
//     console.log("Pessoa é menor de idade");
// }


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.


let carolzita = 6;
let murilo = 5;
let baeta = 4;

if(carolzita < murilo && carolzita < baeta){
    console.log ("Carolzita é a mais nova");

}else if(murilo < carolzita && murilo < baeta) {
    console.log ("Murilo é o mais novo");

}else{
    console.log("Baeta é o mais novo");
}






