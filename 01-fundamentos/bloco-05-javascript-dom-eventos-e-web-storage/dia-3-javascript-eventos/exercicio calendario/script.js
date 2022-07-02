function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//🚀 Exercício 1:

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function dayCreate(days) {
  let ulDays = document.getElementById("days");
  ulDays.classList.add("days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let liDays = document.createElement("li");
    liDays.classList.add("days");
    let day = decemberDaysList[index];

    if (day === 24 || day === 25 || day === 31) {
      liDays.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      liDays.classList.add("friday");
    }

    liDays.innerHTML = day;
    ulDays.appendChild(liDays);
  }
}

dayCreate([
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
]);

//🚀 Exercício 2:

function holidayButtonCreate(valor) {

    let divButtonContainer = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    let buttonHolidayId = 'btn-holiday';

    buttonHoliday.innerText = valor;
    buttonHoliday.id = buttonHolidayId;

    divButtonContainer.appendChild(buttonHoliday);
}

holidayButtonCreate('Feriados');

//🚀 Exercício 3:

function setHolidayColor (){

    let btnHoliday = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let startBackgroundColor = 'rgb(238,238,238)';
    let newBackgroundColor = 'white';

    btnHoliday.addEventListener('click', function(){

        for(let index = 0; index < getHolidays.length; index += 1){

            if(getHolidays[index].style.backgroundColor === newBackgroundColor){
                getHolidays[index].style.backgroundColor = startBackgroundColor;
            }else{
                getHolidays[index].style.backgroundColor = newBackgroundColor;
            }
        }
    })
}

setHolidayColor();

//🚀 Exercício 4:

function fridayButtonCreate(valor){

    let divButtonContainer = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    let buttonFridayId = 'btn-friday';

    buttonFriday.innerText = valor;
    buttonFriday.id = buttonFridayId;

    divButtonContainer.appendChild(buttonFriday);
}

fridayButtonCreate('Sexta-feira');

//🚀 Exercício 5:

function setFridayText (arrayFridays){

    let btnFriday = document.querySelector('#btn-friday');
    let getFridays = document.querySelectorAll('.friday');
    let sextou = 'Sextou';
    console.log(arrayFridays[1])

    btnFriday.addEventListener('click', function(){

        for(let index = 0; index < getFridays.length; index += 1){

            if(getFridays[index].innerHTML !== sextou){

                getFridays[index].innerHTML = sextou ;
            }else{  
                getFridays[index].innerHTML = arrayFridays[index];
            }
        }
    })

}

let daysFridays = [4, 11, 18, 25 ];
setFridayText(daysFridays);