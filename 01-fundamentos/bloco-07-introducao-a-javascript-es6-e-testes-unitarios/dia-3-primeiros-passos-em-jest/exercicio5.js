const techList = (array, name) => {
  let objArray = [];
  for(let index = 0; index < array.length; index += 1){
    objArray.push = {tech : array.sort()[index]};
  }
  return objArray;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;