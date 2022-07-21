function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

test ('Retorna fizzbuzz caso o parametro seja divisivel por 3 ou 5 (15)' , () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz'); 
})

test ('Retorna fizz caso o parametro seja divisivel apenas por 3(9)' , () => {
  expect(myFizzBuzz(9)).toEqual('fizz'); 
})

test ('Retorna buzz caso o parametro seja divisivel apenas por 5 (10)' , () => {
  expect(myFizzBuzz(10)).toEqual('buzz'); 
})

test ('Retorna o proprio numero (8) caso o parametro não seja divisivel por 3 e 5' , () => {
  expect(myFizzBuzz(8)).toEqual(8); 
})

test ('Retorna false caso o parametro não seja um numero("teste")' , () => {
  expect(myFizzBuzz('teste')).toEqual(false); 
})

