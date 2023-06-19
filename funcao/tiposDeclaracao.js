console.log(soma(3, 4)) // com essa função, pode chamar o resultado até antes dela, mas só funciona nessa função padrão
// function declaration FORMA TRADICIONAL
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(10, 2)) // no caso pra chamar uma Function expression, tem que ser logo depois do bloco, se não ela da erro

//named function expression
const mult = function mult (x, y) {
    return x * y
}
console.log(sub(10, 2)) // essa também é obrigado a chamar depois do bloco

/*Na function declaration
Eu posso antes mesmo de declarar a função, 
chamar ela com console.log(soma(3, 4)) e isso vai ocorrer tudo bem
pois uma função dessa forma, o java script primeiro carrega as funções
e depois começa a se executar o código.
SÓ FUNCIONA NESSA FUNÇÃO */

//EXEMPLOOO:

 console.log(soma2(3, 4)) //que vai funcionar mesmo antes de declarar

 function soma2(x, y) {
     return x + y
 }