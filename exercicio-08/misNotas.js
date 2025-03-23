
console.log('funciones')

// Function declaration
function sayHi() {
  console.log('oi')
}

sayHi()


// Function expression 
// uma function atribuida a uma variavel

const showFood = function () {
  console.log ('pizza')
}


showFood()


// JavaScript realiza o "hoisting" (isar/isamento)-> puxa a criação da function para acima do arquivo .
// A function declaration, para que possa ser utilizada ainda que a declaração acomtece depois:

/**
 * sayHi()
 * sayHi()
 * 
 * function sayHi() {
 *    console.log ('oi')
 * }
 * 
 * P 'hoisting'não acontece para as function expressions
 * 
 * Declarar as functions no topo de codigo//
 */


let a = null

// Arguments,  Parametros e default parameters

// undefined -> quando uma variabel e utilizada mas nao e declarada.

const myfunc = function (name = 'Roger', lastName = 'Melo') {  // Parámetro, valor passado na function, defautl parameter, quando nenhum argumento e passado na invocação
  console.log(`Oi ${name} ${lastName}!`) // Variavel
}

myfunc() // Nenhum argumento passado, os paramteros default vaio ser utilizados na function
myfunc('Jorgito', 'Mercado')  // Argumento , quando a function e invocada

//a ordem dos argumentos deve corresponder a ordem dos parametros