// Função sem retorno em javaScript

function imprimirSoma(a, b) {
console.log(a+b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // somente um numero, da erro de NaN
imprimirSoma(2, 10, 54, 43); // somando somente a+b o resto não foi incluso
imprimirSoma(); // Resultado Not A number NaN

//Funcão com retorno

function soma(a, b = 1){
return a + b
}

console.log(soma(2, 5));
console.log(soma(2)); // somente um valor, soma com o outro a+b