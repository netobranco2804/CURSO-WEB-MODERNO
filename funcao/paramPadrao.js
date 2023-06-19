// estrategia 1 para gerar valor padrão
//A MAIS FAMOSA É ESSA LOGO A BAIXO
function soma1(a,b,c){
    a = a || 1 //a recebe a OU 1
    b = b || 1 //b recebe b OU 1
    c = c || 1 //c recebe c OU 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(3)) // 3 esta setado na letra A, somente (a) tem o valor de 3, depois soma com os outros que valem 1, total: 3+1+1 = 5
console.log(soma1(1, 2, 3)) //Aqui ja foi setado: a = 1, b = 2, c = 3 resultado: 6
console.log(soma1(0, 0, 0)) //não funciona nessa estratégia, pois 0 retorna falso. Somando 1+1+1(a+b+c) = 3

// estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se (A) for diferente (!==) de undefined ele pegara o próprio valor de (A), e se o (A) for igual a undefined, assumira o valor (1)
    b = 1 in arguments ? b : 1 // dentro de arguments, existe o (indice[1]? b=1), se existir, pegue o valor de (B), se não pegue o valor padrão que será o valor (1)
    c = isNaN(c) ? 1 : c  //se a variavel (C)IsNotANumber retorne o valor padrão=(? 1), E caso ela seja um número, retorne o valor de (C)
    return a + b + c
}
console.log(soma1()) //não passou nada, então ira assumir o valor padrão = 1. Resultado 1+1+1 = 3
console.log(soma1(3)) //passando só o primeiro elemento (a = 3), resultado 3+1+1 = 5
console.log(soma1(1, 2, 3)) // resultado dara 6, pois a=1, b=2, c=3   resultado 1+2+3 = 6

//valor padrao do es2015
//VERSÃO QUE A MAIORIA PREFERE USAR, E TAMBÉM A MAIS ADEQUADA
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1())
console.log(soma1(3)) // passando 3 para o primeiro parametro (a = 3) , resultado 3 + 1 + 1 = 5
console.log(soma1(1, 2, 3)) //resultado = 6
console.log(soma(0, 0, 0)) // resultado = 0