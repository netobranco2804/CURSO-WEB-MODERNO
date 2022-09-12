// function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult (x, y) {
    return x * y
}


/*Na function declaration
Eu posso antes mesmo de declarar a função, 
chamar ela com console.log(soma(3, 4)) e isso vai ocorrer tudo bem
pois uma função dessa forma, o java script primeiro carrega as funções
e depois começa a se executar o código.
SÓ FUNCIONA NESSA FUNÇÃO */

//EXEMPLOOO:

// console.log(soma(3, 4)) //que vai funcionar mesmo antes de declarar

// function soma(x, y) {
//     return x + y
// }