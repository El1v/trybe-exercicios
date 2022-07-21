const person = (name) => {
  const emailLayout = name.toLowerCase().split(' ').join('_');
  const email = `${ema}@trybe.com`
  return {
    nome: name,
    email: email,
  }
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(person));

