//Exercicio 3

// const button = document.getElementById('button');
// const clicks = document.getElementById('clicks');

// let clickCount = 0;

// button.addEventListener('click', () => {
//   clickCount += 1;
//   clicks.innerText = clickCount;
//  })


//Exercicio 4 

 function replaceX (name) {
    const frase = 'Tryber x aqui!';

    return frase.replace('x' , name);
 }

let tryber = replaceX('Elivelton');

function tryberSkills (tryber) {
  const skills = ['HTML' , 'CSS' , 'JavaScript'];
  return `${tryber}
Minhas três principais habilidades são: ${skills}` 
}

console.log(tryberSkills(tryber));