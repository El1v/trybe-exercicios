//1

let e1 = document.querySelector('#elementoOndeVoceEsta');
console.log(e1);

//2

let e2 = document.querySelector('#elementoOndeVoceEsta').parentNode;

e2.style.backgroundColor = 'red';

//3

let e3 = document.querySelector('#elementoOndeVoceEsta #primeiroFilhoDoFilho');

e3.innerHTML = '<p>Exercicio 3</p>';

//4

let e4 = document.querySelector('#pai').firstElementChild;

//5

let e5 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

//6

let e6 = document.querySelector('#elementoOndeVoceEsta').nextSibling;

//7

let e7 = document.querySelector('#elementoOndeVoceEsta').nextSibling.nextElementSibling;

//8

let e8 = document.querySelector('#pai').lastElementChild.previousElementSibling;

