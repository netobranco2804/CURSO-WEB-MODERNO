//Veirificar se é verdadeiro ou falso
// = simbolo de atribuição
// == simbolo relacional que comparar a igualdade entre duas coisas
// === estritamente igual
// != para saber se o numero é diferente ou igual
// !== eles são diferentes?
console.log('01)', '1' == 1) // true, pois os dois é string ''
console.log('02)', '1' === 1) // false, pois 1 é string, e o outro não que é um valor number
console.log('03)', '3' != 3) // resultado false, pois esta vendo apenas o valor e o tipo não esta vendo
console.log('04)', '4' !== 4) //resultado true, pois são diferentes um é string e o outro é number

console.log('05)', 3 < 2) // 3 é menor que 2?= falso
console.log('06)', 3 > 2) // 3 é maior que 2?= true
console.log('07)', 3 <= 2) // 3 é menor ou igual a 2?= false
console.log('08)', 3 >= 2) // 3 é maior ou igual a 2?= true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //como são numbers, são estritamente iguais = true
console.log('12)', undefined == null) //true
console.log('13)', undefined === null) // false