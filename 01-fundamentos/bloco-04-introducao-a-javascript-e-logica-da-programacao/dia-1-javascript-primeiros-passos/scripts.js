//#1 & #2 & #8 & #9
const a = 10;
const b = 5;
//#3 E #8 & #9
const c = 7;
//#4
const numero = 0;
//#5
const trianguloA = 60;
const trianguloB = 60;
const trianguloC = 0;
let somaTriangulo;
let validarTriangulo;
//#6
let pecaXadrez = "BISPO";
//#7
let nota = 70;
//#10
const custoProduto = 10;
const precoVenda = 20;

//Exercicio 1

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Exercicio 2

if (a > b) {
  console.log("O numero A " + a + " é maior que B " + b);
} else if (a < b) {
  console.log("O numero B " + b + " é maior que A " + a);
} else {
  console.log("Os numeros são iguais");
}

//Exercicio 3

if (a > b && a > c) {
  console.log("O numero A é maior : " + a);
} else if (b > a && b > c) {
  console.log("O numero B é maior : " + b);
} else if (c > a && c > b) {
  console.log("O numero C é maior : " + c);
}

//Exercicio 4

if (numero > 0) {
  console.log("Numero positivo : " + numero);
} else if (numero < 0) {
  console.log("Numero negativo : " + numero);
} else {
  console.log("Numero é zero : " + numero);
}

//Exercicio 5

somaTriangulo = trianguloA + trianguloB + trianguloC;

validarTriangulo = trianguloA > 0 && trianguloB > 0 && trianguloC > 0;

if (validarTriangulo) {
  if (somaTriangulo === 180) {
    console.log("Este é um triangulo valido :" + somaTriangulo);
  } else {
    console.log("Este é um triangulo invalido :" + somaTriangulo);
  }
} else {
  console.log("Mensagem de erro : algum lado do triangulo é negativo");
}

//Exercicio 6

switch(pecaXadrez.toLowerCase()) {
  
  case "bispo" :
    console.log ("É o bispo!!!");
    break;

  default: 
    console.log ("Isso não é uma peça de xadrez :/")
}

//Exercicio 7

if(nota < 0 || nota > 100){ 
  console.log ("Nota invalida :/")
}else if(nota >= 90){
  console.log ("Nota A !" +nota);

}else if(nota >= 80 && nota <90){
  console.log ("Nota B !" +nota);

}else if(nota >= 70 && nota <80){
  console.log ("Nota C !" +nota);

}else if(nota >= 60 && nota <70){
  console.log ("Nota D !" +nota);

}else if(nota >= 50 && nota <60){
  console.log ("Nota E !" +nota);

}else if(nota < 50){
  console.log ("Nota F !" +nota);
}

//Exercicio 8

if(a % 2 === 0 && b % 2 === 0 && c % 2 === 0){
  console.log(true);
}else{ 
  console.log(false);
}

//Exercicio 9

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
  console.log(true);
}else{ 
  console.log(false);
}

//Exercicio 10

if(custoProduto >= 0 && precoVenda >= 0){

  let custoTotalProduto = custoProduto * 1.2;
  let lucroTotalProduto = (precoVenda - custoTotalProduto) * 1000;
  console.log ("Lucro total do produto : " + lucroTotalProduto);

}else{
  console.log ("Valores invalidos");

}

//Exercicio 11


console.log("Exercicio 11");

let salarioBruto = 3000;
let calculoINSS ;
let calculoIR ;
let salarioLimpo ;

if(salarioBruto <= 1556.94){
  calculoINSS = salarioBruto * 0.08;

}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  calculoINSS = salarioBruto * 0.09;

}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  calculoINSS = salarioBruto * 0.11;

}else{
  calculoINSS = 570.88;
}


salarioLimpo = salarioBruto - calculoINSS;


if(salarioLimpo <= 1903.98){
    calculoIR = 0;

}else if(salarioLimpo >= 1903.99 && salarioLimpo <= 2826.65){
    calculoIR = (salarioLimpo * 0.075) - 142.80;

}else if(salarioLimpo >= 2826.66 && salarioLimpo <= 3751.05){
  calculoIR = (salarioLimpo * 0.15) - 354.80;

}else if(salarioLimpo >= 3751.06 && salarioLimpo <= 4664.68){
  calculoIR = (salarioLimpo * 0.225) - 636.13;

}else{
  calculoIR = (salarioLimpo * 0.275) - 869.36;
}
console.log ("O salario limpo é : " + (salarioLimpo - calculoIR));


