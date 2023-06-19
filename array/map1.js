//Map serve para mapear os elementos de um array pra outro
//O Array original tem um tamanho x e o array final tem o mesmo tamanho x
//Map não transforma um array atual, ele gera outro array
const nums = [1,2,3,4,5]

//For com propósito = map
let resultado = nums.map(function(e) {
    return e * 2 //todos os elementos dentro do array multiplicado e gerados em um novo array, com a mesma quantidade de elementos, porem valores diferentes
})
console.log(resultado)
// de: [1,2,3,4,5]
// ficou: [2,4,6,8,10]


//função arrow automaticamente ja retorna algo, pois tem o return implicito a ela
const soma10 = e => e + 10 // recebe o elemento(e) e o elemento(e) vai retornar => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
/* parseFloat retorna um número de ponto flutuante
   tofixed para ter duas casas decimais
   replace para subistituir (.) por (,) */
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

/*
nums = [1,2,3,4,5]
soma10 = [11,12,13,14,15]
triplo = [33, 36, 39, 42, 45]
paraDinheiro = [33 reais, 36 reais, 39 reais, 42 reais, 45 reais]

resultado = ['R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 46,00']
*/