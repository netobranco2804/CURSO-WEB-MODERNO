/*Concat junta os elementos da const filha e filho, depois exibe separado o que cada
um possui dentro de sua array */
const filhas = ['Ualeskah', 'Cibelena']
const filhos = ['Gabriela', 'Rafael']
const todos = filhas.concat(filhos, 'Neto') //se quiser adicionar mais algum dentro do primeiro resultado, só por , depois de filhos, ex: , 'Neto'
console.log(todos, filhas, filhos)

// um exemplo diferente
/*No exemplo a baixo, ele pegou os numero e tirou do array, deixando em sequencia
um ao lado do outro. Porém o que esta em [[]] dois array junto, não foi possivel retirar todos
apenas um colchete, mas o resultado foi exibido.
Lembrando se quiser adicionar algo no inicio em console.log(['podeadd']), pois contara
do mesmo jeito*/
console.log([].concat([1,2], [3,4], 5, [[6, 7]]))