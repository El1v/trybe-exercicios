//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(palavra) {
  if (palavra.split("").reverse().join("") === palavra) {
    console.log("é palindromo");
    return true;
  }

  console.log("não é palindromo");
  return false;
}

verificaPalindromo("banana");
verificaPalindromo("ovo");
