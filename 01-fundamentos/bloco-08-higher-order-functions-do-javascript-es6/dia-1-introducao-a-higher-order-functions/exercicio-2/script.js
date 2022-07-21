// const checkResult = (bet, result) => {
//   if(bet === result){
//     return true;
//   }
// }

// const raffleResult = (bet, callback) => {
//   const numberDrawn =  Math.floor(Math.random() * 5) + 1;
  
//   if(callback(bet, numberDrawn)){
//     return `Parabéns você ganhou ${bet} + ${numberDrawn}`;
//   }else{
//     return `Tente novamente ${bet} + ${numberDrawn}`;
//   }
// }

const checkResult = (bet, result) => bet === result;

const raffleResult = (bet, callback) => {
  const numberDrawn =  Math.floor(Math.random() * 5) + 1;
  return callback(bet, numberDrawn) ? `Parabéns você ganhou ${bet} + ${numberDrawn}` : `Tente novamente ${bet} + ${numberDrawn}`
}

console.log(raffleResult(5, checkResult));