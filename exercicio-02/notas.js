// AULA 02 STRINGS
console.log('Aula #2');

const email= 'dotch3@gmail.com';


console.log(email);

const firstName = 'Nathan';
const lastName = 'Drake';

const fullName = firstName + ' ' + lastName;

console.log(fullName);


//Strings podem ser accessadas com [n]
console.log(fullName[3]);

// Strings também tem metodos e propriedades
// Uma propriedade é o length == quantos carateres a string tem.
// Para utilizar uma propriedade se utiliza o "." (ponto) string.length

console.log(fullName.length);

// Tem funções associadas a elas:
// Metodos e funçs
// Funções: um pedaço de codigo que executa uma ação especifica - utiliza parentesis `()`
// Métodos: Funcões associadas a um objeto. 
// Exemplo:

// # Métodos comunes de Strings
// método de string - tem paréntesis ()
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

//Argumento: o que passa nos parentesis chamando/invocando ao metodo/função

const index = email.indexOf('@');
console.log(index);


// Outros métodos do String:

const otherEmail ='laracroft@rogermelo.com.br';

//Retorna o index da ultimo substring passada como argumento
const lastIndexOfA = otherEmail.lastIndexOf('a');
console.log(lastIndexOfA);

const emailSlice = otherEmail.slice(4 , 9) // desde donde quer começar a pegar a substring, e até onde

console.log(emailSlice);

// #  NUMBERS:

// inteiros e decimals 

const radius =10;
const pi =3.14;

console.log( typeof(radius), typeof(pi))

// operdores aritméticos

const reminder = 5 % 2;
console.log(reminder);

const area = pi * radius ** 2;

console.log(area);

// javaScript segue uma precedencia de operações

// parentesis
// expoentes ou raizes
// multiplicacao e divisao
// adicao e substracao 

// Operadores de incremento e decremento

let postLikes = 10;

// postLikes = postLikes +1;
//shorthand incremento
postLikes ++;  //incremento em 1 o valor da variavel.

console.log(postLikes); //11


postLikes - postLikes + 10;
// shorthand additional assignment
postLikes += 10;

// temos substraction asignment, ultiplication and division assignment

//NaN - not a number: alguma operação não permitida

console.log(7/ 'oi');

//concatenação de string com numero:

const likesMessage = 'O post tem '+ postLikes + ' likes.';

console.log(likesMessage);


//# TEMPLATE STRINGS/TEMPLATE LITERALS

// injectar variaveis dentro de strings

const postTitle = 'É bolacha ou bisscoito?';
const postAuthor = 'Matheus Saad';
const postComments = 15;

// usando concatenação

const postMessage1 ='O post "' + postTitle + '", do ' + postAuthor + ', tem '+postComments + ' comentários';
console.log(postMessage1);

const postMessageTemplate = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários`;
console.log(postMessageTemplate);


// Templates HTML

const html = `
  <h2> ${postTitle} </h2>
  <p>Author: ${postAuthor} </p>
  <span> Este post tem ${postComments} comémtarios </span>
  `
  console.log(html);