let body = document.querySelector('body');


//Exercicio 1
let tagH1 = document.createElement('h1');

tagH1.textContent = 'Exercício 5.2 - JavaScript DOM';

body.appendChild(tagH1);

//Exercicio 2

let tagMain = document.createElement('main');

tagMain.classList.add('main-content');

body.appendChild(tagMain);

//Exercicio 3

let main = document.getElementsByClassName('main-content');

let tagSection = document.createElement('section');

tagSection.classList.add('center-content');

main[0].appendChild(tagSection);

//Exercicio 4

let section = document.querySelector('.main-content section');

let tagP = document.createElement('p');

tagP.innerText = 'Algum texto';

section.appendChild(tagP);

//Exercicio 5

let tagSectionLeft = document.createElement('section');

tagSectionLeft.classList.add('left-content');

main[0].appendChild(tagSectionLeft);

//Exercicio 6

let tagSectionRight = document.createElement('section');

tagSectionRight.classList.add('right-content');

main[0].appendChild(tagSectionRight);

//Exercicio 7

let sectionLeft = document.querySelector('.main-content .left-content');

let tagImg = document.createElement('img');

tagImg.src = 'https://picsum.photos/200';

sectionLeft.appendChild(tagImg);