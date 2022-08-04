// // Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNameNationality = ({firstName, nationality}) => `${firstName} is ${nationality}`;

// // Definição da função getUser
// const getUser = (callback) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return callback(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// // getUser(userFullName);
// console.log(getUser(userFullName));
// console.log(getUser(userNameNationality));

//---------------------------

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo