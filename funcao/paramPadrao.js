// estrategia 1 para gerar valor padrão
//A MAIS FAMOSA É ESSA LOGO A BAIXO
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(3)) // esta setado na letra a, somente (a) tem o valor de 3, depois soma com os outros que valem 1, total: 3+1+1 = 5
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) //não funciona, pois 0 retorna falso

// estrategia 2, 3 e 4 para gerar valor padrão

//se a for diferente de undefined, caso seja diferente vai pegar o valor de a (? a)
// e se a (? a) for igual a undefined, o valor dele sera 1

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = b in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))

//valor padrao do es2015
//VERSÃO QUE A MAIORIA PREFERE USAR
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1, 2, 3))