//Map serve para mapear os elementos de um array pra outro
//O Array original tem um tamanho x e o array final tem o mesmo tamanho x
//Map não transforma um array atual, ele gera outro array
const nums = [1,2,3,4,5]

//For com propósito = map
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)