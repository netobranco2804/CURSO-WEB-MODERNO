const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/*Se quiser pode percorrer esse array usando forEach 
a partir do foreach vai percorrer os elementos do array que foi gerado apartir de object.entries*/
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`) // 0 e 1 = chave e valor
})

//de uma forma mais clara e com mesmo resultado

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) 
})

//Definir uma propriedade de um objeto, criar novo atributo 'dataNascimento' dentro de pessoa.
/*Você pode definir algumas caracteristicas de uma propriedade
ex: Essa propriedade pode ou nao ser alterada?
ex: ficara ou nao visivel?*/

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //vai ser listada?
    writable: false, // pode ser modificada ?
    value: '01/01/2022'
})
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015) concatenar varios objetos dentro de um só
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) 
console.log(obj)
/*aqui como ja existe o a:1 em primeiro, ele sera substituido pelo outro, ou melhor
um vai sobrescrevendo o outro , e o ultimo valor que vai ficar, é do objeto que ele
concatenou que no caso é: o valor de a sera o valor de o2=4 */

