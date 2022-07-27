//Spread Operator//

// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Manga', 'Uva', 'Morango'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Leite Condensado', 'Granola', 'Iourgute'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));


//Object Destructuring//

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

// const {name, age, nationality} = user;
// const {profession, squad, squadInitials} = jobInfos;

// console.log(`Hi, my name is ${name}. I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);


//Array Destructuring//

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];


//Default Destructuring//

const getNationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

// const {nationality = 'Brazilian'} = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


//Object Property Shorthand

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

// console.log(getPosition(-19.8157, -43.9542));


//Default Parameters

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));