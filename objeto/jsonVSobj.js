/*json é um formato de dados, não é algo que é executado, 
por isso a função soma não funcionou*/
const obj = {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj)) // formato textual

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) // formato que não é valido = erro

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // tbm formato errado

/*Todos os atributos no formato Json, eles devem o nome do atributo tem que ser
delimitado com "" = regra a ser respeitada caso contrario, resltado invalido */

console.log(JSON.parse(' { "a":1, "b":2, "c":3 }'))//obj gerado a partir de um json

//Algumas possibilidades em que o Json suporta

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))

