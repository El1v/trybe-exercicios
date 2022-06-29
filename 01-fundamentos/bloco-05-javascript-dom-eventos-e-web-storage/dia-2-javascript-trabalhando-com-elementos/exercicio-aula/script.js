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

//PARTE 2

//1

let paiOndeVoceEsta = document.getElementById("pai");

let elementoOndeVoceEstaBrother = document.createElement('section');

elementoOndeVoceEstaBrother.id = 'elementoOndeVoceEstaBrother';

paiOndeVoceEsta.appendChild(elementoOndeVoceEstaBrother);

//2

let pai = document.getElementById('elementoOndeVoceEsta');

let elementoOndeVoceEstaFilho = document.createElement ('section');

elementoOndeVoceEstaFilho.id = 'elementoOndeVoceEstaFilho';

pai.appendChild(elementoOndeVoceEstaFilho);

//3

let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

let filhoDoPrimeiroFilho = document.createElement('section');

filhoDoPrimeiroFilho.id = ('filhoDoPrimeiroFilho');

filhoDoFilho.appendChild(filhoDoPrimeiroFilho);

//4

let eFIlho = document.querySelector('#filhoDoPrimeiroFilho').parentNode.parentNode.parentNode.lastChild.previousElementSibling.previousElementSibling;

//PARTE 3

// let paiDoPai = document.getElementById('paiDoPai') ;


