/*Array em javascript na verdade é um objeto especial, tem caracteristicas proprias
mas não existe o array nativo em javascript um tipo de dados array
Array invez de organizar os seus atributos apartir de chaves/identificadores
Ele organiza os seus dados apartir de um indice/estrutura indexada coemçando do 0
Então o primeiro elemento/valor que você coloca em um array ele é o de indice 0
depois indice 1, indice 2 e por ai vai organizando os seus dados apartir de um indice*/

//exemplo 
console.log(typeof Array, typeof new Array, typeof[])

//forma valida porém pouco usada de se criar um array
let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)
//Criar na notação literal recomendada para usar no dia a dia
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined, pois não existe o quarto nome dentro do array

//forma valida de adicionar um novo elemento dentro de um array
aprovados[3] = 'Paulo' //server para adicionar, mas é mais usado para subistituir um elemento dentro do array
aprovados.push('Abia') //forma mais correta de se adicionar um elemento dentro do array
console.log(aprovados.length) //descobrir quantos elementos possuem agora dentro da array, já que adicionou mais uma pessoa logo a cima

aprovados[9] = 'Rafael' // restante dos elementos 6,7 e 8 são undefined, mas o 9 existe com nome de rafael
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //true
console.log(aprovados[8] === null) //false
//mostrar como esta o array com os elementos adicionados e os vazios
console.log(aprovados)
aprovados.sort() // função que causa alteração dentro do array, ordenar array e alternar de fato alternando ele
console.log(aprovados) // sort altera o array, deixa aleatorio os nomes, mas o indice mantem o mesmo.

//formas de deletar um elemento array, deixando como undefined
delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //serve para adicionar, e também para remover elementos de array. Então Indice 1, 1 remove o indice(1)
aprovados.splice(1, 2) // para deletar 2 elementos, comecando por carlos
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //forma para excluir 2 elementos e adicionar dois no lugar
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //forma para adicionar mais elementos, logo após o primeiro elemento
//então no caso essa ultima opção ficaria
// Bia, Elemento1, Elemento2, Carlos, Ana
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // excluir só 1 elemento
// Bia, Elemento1, Elemento2, Ana
