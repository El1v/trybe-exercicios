const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isPair = numbers.filter((num) => num % 2 === 0);

const sumOfPairs = isPair.reduce((acc, curr) => acc + curr);

console.log(sumOfPairs);

//-----------------------------------

const getEven = (num) => num % 2 === 0;
const sumPair = (accumulator , number) => accumulator + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);

console.log(sumNumbers(numbers));

//--------------------------

const sumPairReduce = (accumulator, number) => (number % 2 === 0) ? accumulator + number : accumulator; 

const sumNumbersReduce = (array) => array.reduce(sumPairReduce, 0);

console.log(sumNumbersReduce(numbers));