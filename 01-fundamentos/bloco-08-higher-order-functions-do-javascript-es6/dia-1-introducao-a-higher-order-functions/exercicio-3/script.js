const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const testCorrection = (rightAnswers,studentAnswers) => {
    if(rightAnswers === studentAnswers){
      return 1;
    }
    if(studentAnswers === 'N.A'){ 
      return 0;
    }
    return -0.5
  }

const testScore = (rightAnswers, studentAnswers, callback) => {
  let count = 0;
  for (let index =0; index < rightAnswers.length; index += 1){
    const callbackReturn = callback(rightAnswers[index], studentAnswers[index])
    count += callbackReturn;
  }
  return `Resultado final: ${count}`;
}

const nota = testScore(RIGHT_ANSWERS, STUDENT_ANSWERS, testCorrection);
console.log(nota);