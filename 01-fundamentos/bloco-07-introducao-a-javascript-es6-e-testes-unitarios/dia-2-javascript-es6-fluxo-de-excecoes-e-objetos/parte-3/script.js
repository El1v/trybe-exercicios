const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//parte 1

// function addNightTurn (obj, key, value) {
//   obj[key] = value;
//   }

// addNightTurn(lesson2, 'turno', 'noite');
// console.table(lesson2);

//parte 2

// const keyListener = (obj) => Object.keys(obj);

// console.log(keyListener(lesson1));

//parte 3

// const objettSize = (obj) => Object.keys(obj).length; 

// console.log(objettSize(lesson1));

//parte 4

// const objectValues = (obj) => Object.values(obj);

// console.log(objectValues(lesson1));

//parte 5

const allLessons = Object.assign({} , { lesson1, lesson2, lesson3 });
// console.table(allLessons);

//parte 6

//forma humilde
// const allStudents = (obj) => {
//   return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
// }

//forma complexa
// const allStudents = (obj) => {
//   const arrayStudantsNumber = Object.keys(obj);
//   let totalStudants = 0;
//   for(let index in arrayStudantsNumber){
//     totalStudants += obj[arrayStudantsNumber[index]].numeroEstudantes;
// }
//   return totalStudants;
// }
// console.log(allStudents(allLessons));

//parte 7

// const keyValue = (obj, number) => Object.values(obj)[number];

// console.log(keyValue(lesson1, 0));

//parte 8

const verifyExist = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;

  for(let index in arr){
    if(arr[index][0] === key && arr[index][1] === value) isEqual = true

  }
  return isEqual;
}

console.log(verifyExist(lesson1, 'materia', 'Matemática'));