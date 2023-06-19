function soma() {
    let soma = 0
    for (i in arguments){ //pegando indice da cada elemento. (arguments é um array)
        soma += arguments[i] //pegando cada um dos arguments e soma, no final da um return
    }
    return soma // resultado de todos os paramentros
}

console.log(soma()) // valor = 0, pois não tem nenhum argumento, então não entrara no for
console.log(soma(1)) // valor = 1, pois retornou o unico paramentro que eu passei
console.log(soma(1.1, 2.2, 3.3)) // valor = 6.6, somando todos os valores juntos 1+2+3 = 6 / depois 1+2+3 = 6 também
