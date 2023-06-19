/*Concat junta os elementos da const filha e filho, depois exibe separado o que cada
um possui dentro de sua array */
const filhas = ['Ualeskah', 'Cibelena']
const filhos = ['Gabriel', 'Rafael']
const todos = filhas.concat(filhos, 'Neto') //concat transforma isso em um array unico, filhas e filhos agora estão juntos, porém foi acrescentado mais um filho no meio desse array
console.log(todos, filhas, filhos)
/*
EXEMPLO:

(todos,filhas,filhos):
[ 'Ualeskah', 'Cibelena', 'Gabriela', 'Rafael', 'Neto' ] [ 'Ualeskah', 'Cibelena' ] [ 'Gabriela', 'Rafael' ]

console.log(todos):
[ 'Ualeskah', 'Cibelena', 'Gabriela', 'Rafael', 'Neto' ] 
console.log(filhas):
[ 'Ualeskah', 'Cibelena' ] 
console.log(filhos):
[ 'Gabriel', 'Rafael' ]
 */



// um exemplo diferente
/*No exemplo a baixo, ele pegou os numero e tirou do array, deixando em sequencia
um ao lado do outro. Porém o que esta em [[]] dois array junto, não foi possivel retirar todos
apenas um colchete, mas o resultado foi exibido.
Lembrando se quiser adicionar algo no inicio em console.log(['podeadd']), pois contara
do mesmo jeito*/
console.log([].concat([1,2], [3,4], 5, [[6, 7]]))
//resultado:
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ]