/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

//PRIMEIRA PARTE DO EXERCICIO
//let conteudoById = document.getElementById('conteudo').innerHTML = '<p>Texto alterado do nosso site com byId</p>  <p>_____</p>  <p>#goTrybe</p>';

//let conteudoByClass = document.getElementsByClassName('center-content')[0].innerHTML = '<p>Texto alterado do nosso site com byClass</p>  <p>_____</p>  <p>#goTrybe</p>';;

// let conteudoByTagName = document.getElementsByTagName('p');

// conteudoByTagName[0].innerText = 'Texto alterado do nosso site com byTagName';
// conteudoByTagName[1].innerText = '/-/-/-/-';
// conteudoByTagName[2].innerText = '#vqv';


//1. Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)//

function alteraTextoP(valor){

    let conteudoAlterar = document.getElementsByTagName('p')[1].innerText = valor; 

    return conteudoAlterar;
}

alteraTextoP('Muda segundo <p>');

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).//

function quadradoVerdeTrybe (){
    let quadradoAlterar = document.getElementsByClassName('main-content')[0];
    quadradoAlterar.style.backgroundColor = 'rgb(76,164,109)'
}

quadradoVerdeTrybe();

//3. Crie uma função que mude a cor do quadrado vermelho para branco.

function quadradoBrancoTrybe (){
    let quadradoAlterar = document.querySelector('.main-content .center-content');
    quadradoAlterar.style.backgroundColor = 'white';
}

quadradoBrancoTrybe();

//4. Crie uma função que corrija o texto da tag <h1>.

function arrumaH1 (valor){
    let novoValor = document.querySelector('h1.title').innerText = valor;

return novoValor;
}

arrumaH1('Exercício 5.1 - JavaScript');

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function toUpperCaseP (){

    let novoValor = document.querySelectorAll('.center-content p');

    for (let index = 0; index < novoValor.length; index += 1){ 
        novoValor[index].innerText = novoValor[index].innerText.toUpperCase();
    }

    return novoValor;
}

toUpperCaseP();

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function showAllP(){

    let novoValor = document.getElementsByTagName('p');

    for(let index = 0; index < novoValor.length; index +=1){

        console.log(novoValor[index].innerText);

    }

    console.log('Quantidade de tags <p> : ', novoValor.length);

}

showAllP();
