/*Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores. */

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(10, 4) // da um numero que não é inteiro, mas o math.floor arredonda para inteiro
// e depois mostra o restante da divisão que faltou na segunda parte