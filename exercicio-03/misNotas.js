console.log('Mis notas aula arrayas  03-02');

let heroes = ['Batman', 'Spider-man', 'Superman'];

// console.log(heroes);

// Metodos de arrays
const joinHeroes = heroes.join(';');
// console.log(joinHeroes);

const moreHeroes = heroes.concat(['Wolverine', 'Jesus']);
// console.log(moreHeroes);

const pushToHeroes = heroes.push('Cyclops', 'Hulk'); // Retorna o novo length do array

// console.log(pushToHeroes);

const popHeroes = heroes.pop();

// console.log(popHeroes);
// console.log(heroes);

// NULL e UNDEFINED
// null tem que ser intencionalmente codificado


let emptiness

console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`);

// quando uma variable não tem um valor, então recebe "undefined"
// Quando tenta realizar um realizar uma operação matematica a uma vraiobale que não armaena um valor, o resultado e Not a Number  'NaN'
// Convertir a string una variable sem ter valor armazenado, a string é  "undefined"
emptiness = null;

console.log(emptiness, emptiness + 3, `o valor é ${emptiness}`);
// Quando se realiza uma operação matematica com null, se interpreta com "0"
// convertir a string um null -> da  "null"
