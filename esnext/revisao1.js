// let e const
{
    var a = 2
    let b = 5
}

console.log(a)
// console.log(b) -> esse não aparece o resultado porque let só é possivel ser lido dentro de um bloco e o console ta fora do bloco.



//Templete String
const produto = 'iPad'
console.log(`O produto ${produto} é extremamente Caro!`) 
// possivel fazer em uma linha como está em cima, ou quebrando ela em várias como no exemplo a baixo:>
//console.log(`O produto 
//${produto} é 
//extremamente 
//Caro!`)


// Operador Destruction = tirar algo de dentro de uma string, array, bloco etc..
const [l, e, ...tras] = 'Cod3r'
console.log(l,e,tras)

const [x, , y] = [1,2,3] //pulo o 2 por conta da , , vazia
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(nome, idade)

// também pode setar uma variavel para idade ou nome, pra puxar de forma mais simples
const {primeironome: i, segundonome: t} = {primeironome: 'Felipe', segundonome: 'Borges'}
console.log(i,t)

