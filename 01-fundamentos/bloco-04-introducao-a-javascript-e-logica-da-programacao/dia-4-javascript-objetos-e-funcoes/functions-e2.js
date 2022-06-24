// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

function maiorValorArray(arrayNum) {
  let maiorIndice = [0];
  let maior = arrayNum[0];
  let index = 1;
    let tamanhoDoArray = arrayNum.length;

    console.log(tamanhoDoArray);

  for (index = 1; index < tamanhoDoArray; index += 1) {
    console.log(index);
    console.log(tamanhoDoArray);
    console.log("---------------");

    if (arrayNum[index] > maior) {
      maior = arrayNum[index];
      maiorIndice = index + 1;

      console.log("maior numero", maior);
      console.log(index);
      // console.log("maior indice" , maiorIndice);
    }
    // console.log("Maior numero é : ", maior , " do indice " , maiorIndice);
    return maiorIndice;
  }
}

maiorValorArray([2, 3, 6, 7, 10, 1]);

// let array = [2, 3, 16, 7, 10, 12];
// let maior = array[0];
// let maiorIndice = 0;

//     for(let index =1; index < array.length; index +=1){
//         if(array[index] > maior){

//             maior = array[index];
//             maiorIndice = index +1;

//         }

//     }

//     console.log("Maior numero é : ", maior , " do indice " , maiorIndice);
