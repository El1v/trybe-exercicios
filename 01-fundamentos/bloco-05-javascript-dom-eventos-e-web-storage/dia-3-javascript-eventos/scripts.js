const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// secondLi.classList.add('tech');
// thirdLi.classList.add('tech');


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addTech (evento){
    const elementoTech = document.querySelector('.tech');
    //remove a classe tech da primeira LI (pego com querySelector)
    elementoTech.classList.remove('tech');
    //pega qual Li foi clicada com o target e adiciona a classe tech nela
    evento.target.classList.add('tech');
    //zera o input a cada clique
    input.value = ('');

}

firstLi.addEventListener('click', addTech);
secondLi.addEventListener('click', addTech);
thirdLi.addEventListener('click', addTech);


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addTextTech (evento){
    //pega a LI clicada
    const elementoTech = document.querySelector('.tech');
    //pega o INPUT
    const inputValue = document.querySelector('#input');
    //passa a LI como texto e altera com o valor do input
    elementoTech.innerText = evento.target.value;
}

input.addEventListener('input' , addTextTech);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function dbClicks(){
    window.location.replace('www.google.com');
}

myWebpage.addEventListener('dblclick', dbClicks);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function alteraCor(evento){
    evento.target.style.color = 'red';
}

function removeCor(evento){
    evento.target.style.color = 'unset';
}

myWebpage.addEventListener('mouseover' , alteraCor);
myWebpage.addEventListener('mouseout' , removeCor);

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.