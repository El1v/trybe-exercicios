const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

function authorBornIn1947() {
  return books.find((item) => item.author.birthYear).author.name}

// console.log(authorBornIn1947());

//2 - Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook = '';
  books.forEach((item) => {
    if(item.name.length > nameBook.length ){
      nameBook = item.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName());

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook() {
  // escreva seu código aqui
  return books.find((item) => item.name.length === 26);
}

// console.log(getNamedBook());

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

// console.log(booksOrderedByReleaseYearDesc());

//🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

let expectedResult5 = false;

function everyoneWasBornOnSecXX() {
   return books.every((item ) => item.author.birthYear > 1900 && item.author.birthYear <= 2000);
}

expectedResult5 = everyoneWasBornOnSecXX();
// console.log(expectedResult5);

// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

let expectedResult6 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((item) => item.releaseYear >= 1980 && item.releaseYear < 1990);
}

expectedResult6 = someBookWasReleaseOnThe80s();
console.log(expectedResult6);