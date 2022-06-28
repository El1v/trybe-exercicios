document.getElementById('page-title').innerText = 'Senhor dos aneis';

// document.getElementById('second-paragraph').innerText = 'Utilizei minha criatividade';

document.getElementById('subtitle').innerText = "Aqui tem um subtitulo legal";



//pegando os textos das classes sem for
// console.log(document.getElementsByClassName('para')[0].innerText);
// console.log(document.getElementsByClassName('para')[1].innerText);


//pegando os textos das classes com for
let paragrafos = document.getElementsByClassName('para');

for(let index =0; index < paragrafos.length; index += 1 ){
    console.log(document.getElementsByClassName('para')[index].innerText);

}
paragrafos[0].style.color = 'green';
paragrafos[0].fontSize = '1.5rem'

let subtitulo = document.getElementsByTagName('h4')[0];
subtitulo.style.color = 'red';